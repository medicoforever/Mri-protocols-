import { Protocol, GroupedData } from './types';

export const parseDuration = (duration: string | null): number => {
  if (!duration) return 0;
  // Check if it matches mm:ss format
  const timeMatch = duration.match(/^(\d{2}):(\d{2})$/);
  if (timeMatch) {
    const minutes = parseInt(timeMatch[1], 10);
    const seconds = parseInt(timeMatch[2], 10);
    return minutes * 60 + seconds;
  }
  return 0; // "yes", "no", or invalid formats count as 0 seconds for sum
};

export const formatSeconds = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const calculateTotalTime = (sequences: { duration: string | null }[]): string => {
  const totalSeconds = sequences.reduce((acc, seq) => acc + parseDuration(seq.duration), 0);
  return formatSeconds(totalSeconds);
};

export const fillMissingDurations = (data: Protocol[]): Protocol[] => {
  // 1. Build a map of Sequence Name -> Best Known Duration (valid timestamp)
  const durationMap = new Map<string, string>();
  
  data.forEach(protocol => {
    protocol.sequences.forEach(seq => {
      // If we have a valid mm:ss duration, store it for this sequence name
      if (seq.duration && /^\d{2}:\d{2}$/.test(seq.duration)) {
        durationMap.set(seq.name, seq.duration);
      }
    });
  });

  // 2. Return new data with filled durations
  return data.map(protocol => ({
    ...protocol,
    sequences: protocol.sequences.map(seq => {
      // If duration is missing or invalid (like null or "yes/no"), try to find a valid one
      // We keep the original if it's a valid time, otherwise fallback to map, otherwise keep original
      const isValidTime = seq.duration && /^\d{2}:\d{2}$/.test(seq.duration);
      
      if (isValidTime) {
        return seq;
      }
      
      const knownDuration = durationMap.get(seq.name);
      if (knownDuration) {
        return { ...seq, duration: knownDuration };
      }
      
      return seq;
    })
  }));
};

export const groupData = (data: Protocol[]): GroupedData => {
  const grouped: GroupedData = {};

  data.forEach((item) => {
    let category = "Other";
    let subCategory = "General";

    if (item.additional_info) {
      const parts = item.additional_info.split('>').map((s) => s.trim());
      if (parts.length > 0) category = parts[0];
      if (parts.length > 1) subCategory = parts[1];
    }

    if (!grouped[category]) {
      grouped[category] = {};
    }
    if (!grouped[category][subCategory]) {
      grouped[category][subCategory] = [];
    }

    grouped[category][subCategory].push(item);
  });

  return grouped;
};