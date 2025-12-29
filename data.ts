import { Protocol } from './types';

export const generalSettings = {
  "Protocol_Parameters": {
    "Routine": {
      "Routine_Common": {
        "Slice_Group": " [e.g. 1] ",
        "Slices": " [e.g. 40] ",
        "Distance_Factor": " [e.g. 20 %] ",
        "Position": " [e.g. L1.3 P18.8 H43.3] ",
        "Orientation": " [e.g. T > C14.2 > S-3.0] ",
        "Phase_Encoding_Dir": " [e.g. R >> L] ",
        "Phase_Oversampling": " [e.g. 50 %] ",
        "FoV_Read": " [e.g. 200 mm] ",
        "FoV_Phase": " [e.g. 87.5 %] ",
        "Slice_Thickness": " [e.g. 3.0 mm] ",
        "TR": " [e.g. 9000.0 ms] ",
        "TE": " [e.g. 120.00 ms] ",
        "Averages": " [e.g. 1] ",
        "Concatenations": " [e.g. 3] ",
        "AutoAlign": " [e.g. Head > Brain] "
      },
      "Dynamic": {
        "Dynamic_Mode": " [e.g. Standard] ",
        "Measurements": " [e.g. 1] ",
        "Multiple_Series": " [e.g. Each Measurement] "
      }
    },
    "Contrast": {
      "Note": "See Resolution tab for overlapping parameters often grouped here depending on sequence type. In screenshots provided, 'Contrast' sidebar leads to common resolution settings.",
      "Common": {
        "FoV_Read": " [e.g. 200 mm] ",
        "FoV_Phase": " [e.g. 87.5 %] ",
        "Slice_Thickness": " [e.g. 3.0 mm] ",
        "Base_Resolution": " [e.g. 320] ",
        "Phase_Resolution": " [e.g. 70 %] ",
        "Trajectory": " [e.g. Cartesian] ",
        "Interpolation": " [Checkbox: Checked / Unchecked] "
      }
    },
    "Resolution": {
      "Common": {
        "FoV_Read": " [e.g. 200 mm] ",
        "FoV_Phase": " [e.g. 87.5 %] ",
        "Slice_Thickness": " [e.g. 3.0 mm] ",
        "Base_Resolution": " [e.g. 320] ",
        "Phase_Resolution": " [e.g. 70 %] ",
        "Trajectory": " [e.g. Cartesian] ",
        "Interpolation": " [Checkbox: Checked / Unchecked] "
      }
    },
    "Geometry": {
      "Common": {
        "Slice_Group": " [e.g. 1] ",
        "Slices": " [e.g. 40] ",
        "Distance_Factor": " [e.g. 20 %] ",
        "Position": " [e.g. L1.3 P18.8 H43.3] ",
        "Orientation": " [e.g. T > C14.2 > S-3.0] ",
        "Phase_Encoding_Dir": " [e.g. R >> L] ",
        "Phase_Oversampling": " [e.g. 50 %] ",
        "FoV_Read": " [e.g. 200 mm] ",
        "FoV_Phase": " [e.g. 87.5 %] ",
        "Slice_Thickness": " [e.g. 3.0 mm] ",
        "TR": " [e.g. 9000.0 ms] ",
        "Multi_Slice_Mode": " [e.g. Interleaved] ",
        "Series": " [e.g. Interleaved] ",
        "Concatenations": " [e.g. 3] "
      },
      "AutoAlign": {
        "Initial_Position": " [e.g. R0.6 A15.2 F11.3] ",
        "R": " [e.g. 0.6 mm] ",
        "A": " [e.g. 15.2 mm] ",
        "F": " [e.g. 11.3 mm] ",
        "Initial_Orientation": " [e.g. Transversal] ",
        "Initial_Rotation": " [e.g. 90.00 deg] "
      },
      "Navigator": {
        "Navigator_Setting": " [e.g. None / On / Off] "
      },
      "Saturation": {
        "Saturation_Region": " [Select Region] ",
        "Special_Saturation": " [e.g. Parallel F] ",
        "Gap": " [e.g. 10.00 mm] ",
        "Thickness": " [e.g. 50.00 mm] "
      },
      "Tim_Planning_Suite": {
        "Set_n_Go_Protocol": " [Checkbox: Checked / Unchecked] ",
        "Table_Position": " [e.g. H - 0 mm] ",
        "Inline_Composing": " [Checkbox: Checked / Unchecked] "
      }
    },
    "System": {
      "Miscellaneous": {
        "Coil_Selection": " [e.g. Auto Coil Select] ",
        "Store_Coil_Selection": " [Checkbox: Checked / Unchecked] ",
        "MSMA": " [e.g. S - C - T] ",
        "Sagittal": " [e.g. R >> L] ",
        "Coronal": " [e.g. A >> P] ",
        "Transversal": " [e.g. F >> H] ",
        "Coil_Combination": " [e.g. Adaptive Combine] ",
        "Matrix_Optimization": " [e.g. Off] ",
        "Coil_Focus": " [e.g. Flat] "
      },
      "Adjustments": {
        "Adjustment_Strategy": " [e.g. Standard] ",
        "B0_Shim": " [e.g. Standard] ",
        "B1_Shim": " [e.g. TrueForm] ",
        "CoilShim": " [e.g. Off] ",
        "Adjustment_Tolerance": " [e.g. Auto] ",
        "Adjust_with_Body_Coil": " [Checkbox: Checked / Unchecked] ",
        "Confirm_Frequency": " [e.g. Never] ",
        "Assume_Silicone": " [Checkbox: Checked / Unchecked] "
      },
      "Adjust_Volume": {
        "Position": " [e.g. L1.3 P18.8 H43.3] ",
        "Orientation": " [e.g. T > C14.2 > S-3.0] ",
        "Rotation": " [e.g. 89.73 deg] ",
        "R_to_L": " [e.g. 175 mm] ",
        "A_to_P": " [e.g. 200 mm] ",
        "F_to_H": " [e.g. 144 mm] ",
        "Reset": " [Button] "
      },
      "Tx_Rx": {
        "Frequency_1H": " [e.g. 123.257041 MHz] ",
        "Tx_Ref_Nucleus": " [e.g. Amplitude [V]] ",
        "Ref_Amplitude_1H": " [e.g. 0.000] ",
        "Image_Scaling": " [e.g. 1.000] "
      }
    },
    "Physio": {
      "Signal": {
        "1st_Signal_Mode": " [e.g. None] ",
        "Concatenations": " [e.g. 3] ",
        "TR": " [e.g. 9000.0 ms] "
      },
      "Cardiac": " [Options not shown in screenshots] ",
      "PACE": " [Options not shown in screenshots] "
    },
    "Inline": {
      "Subtraction": {
        "Subtract": " [Checkbox: Checked / Unchecked] ",
        "Measurements": " [e.g. 1] ",
        "StdDev": " [Checkbox: Checked / Unchecked] ",
        "Motion_Correction": " [e.g. None] ",
        "Save_Original_Images": " [Checkbox: Checked / Unchecked] "
      },
      "MIP": {
        "MIP_Sag": " [Checkbox: Checked / Unchecked] ",
        "MIP_Cor": " [Checkbox: Checked / Unchecked] ",
        "MIP_Tra": " [Checkbox: Checked / Unchecked] ",
        "MIP_Time": " [Checkbox: Checked / Unchecked] ",
        "Radial_MIP": " [Checkbox: Checked / Unchecked] ",
        "Save_Original_Images": " [Checkbox: Checked / Unchecked] ",
        "MPR_Sag": " [Checkbox: Checked / Unchecked] ",
        "MPR_Cor": " [Checkbox: Checked / Unchecked] ",
        "MPR_Tra": " [Checkbox: Checked / Unchecked] "
      },
      "Composing": {
        "Inline_Composing": " [Checkbox: Checked / Unchecked] "
      }
    },
    "Sequence": {
      "Part_1": {
        "Sequence_Name": " [e.g. qtir_rs] ",
        "Dimension": " [e.g. 2D] ",
        "RF_Pulse_Type": " [e.g. Normal] ",
        "Gradient_Mode": " [e.g. Fast] ",
        "Flow_Compensation": " [e.g. Slice] ",
        "Bandwidth": " [e.g. 289 Hz/Px] ",
        "Echo_Spacing": " [e.g. 12.0 ms] ",
        "Define": " [e.g. Turbo Factor] ",
        "Turbo_Factor": " [e.g. 23] ",
        "Echo_Trains_per_Slice": " [e.g. 4] "
      },
      "Part_2": {
        "Introduction": " [Checkbox: Checked / Unchecked] ",
        "Phase_Correction": " [e.g. Automatic] ",
        "Compensate_T2_Decay": " [Checkbox: Checked / Unchecked] ",
        "Hyperecho": " [Checkbox: Checked / Unchecked] ",
        "WARP": " [Checkbox: Checked / Unchecked] ",
        "Red_EC_Sensitivity": " [Checkbox: Checked / Unchecked] ",
        "Acoustic_noise_reduction": " [e.g. On / Off] ",
        "Reduce_Motion_Sens": " [Checkbox: Checked / Unchecked] ",
        "Motion_Correction": " [e.g. None] "
      },
      "Assistant": {
        "SAR_Assistant": " [e.g. Off] ",
        "Allowed_Delay": " [e.g. 60 s] "
      }
    }
  }
};

// Merged the multiple JSON arrays provided in the prompt into a single dataset.
export const rawData: Protocol[] = [
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:55" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:45" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "02:57" },
      { "name": "tof_cs_acc7.2", "duration": "02:45" },
      { "name": "t2_tse_cor", "duration": "00:55" },
      { "name": "t2_space_tra_Navigation", "duration": "02:58" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_mprage_sag_p2_iso", "duration": "02:57" },
      { "name": "t1_space_sag_cs4_iso", "duration": "02:49" },
      { "name": "t2_space_dark-fluid_sag_caipi4", "duration": "04:47" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Ped_Brain",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "02:15" },
      { "name": "t2_tse_tra_p3", "duration": "02:00" },
      { "name": "t1_tse_tir_tra", "duration": "02:27" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:09" },
      { "name": "t1_tse_tir_obl_cor", "duration": "01:54" },
      { "name": "t2_tse_obl_cor", "duration": "01:59" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "02:46" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:38" },
      { "name": "Venogram_Sag", "duration": "03:18" },
      { "name": "t2_space_dark-fluid_sag_caipi4", "duration": "03:30" },
      { "name": "t2_relaxometry_16 echoes", "duration": "04:29" },
      { "name": "pcasl_3d_Child", "duration": "03:13", "info": "Generic Views" },
      { "name": "tof_cs_acc7.2", "duration": "02:49" },
      { "name": "t2_space_tra_Navigation", "duration": "03:25" },
      { "name": "csi_slaser_135", "duration": "04:10", "info": "Spectroscopy" },
      { "name": "svs_se_35", "duration": "01:50", "info": "Spectroscopy" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Stroke_Limited",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_3scan_trace_tra_p2_160", "duration": "02:31" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:56" },
      { "name": "tof_cs_acc7.2", "duration": "02:59" },
      { "name": "vessel_scout_neck", "duration": "00:30" },
      { "name": "tof_fl3d_tra_large", "duration": "04:42" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Stroke",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_3scan_trace_tra_p2_160", "duration": "02:30" },
      { "name": "tof_cs_acc7.2", "duration": "02:47" },
      { "name": "vessel_scout_neck", "duration": "00:30" },
      { "name": "tof_cs_acc7.2", "duration": "02:47" },
      { "name": "tof_fl3d_tra_large", "duration": "03:43" },
      { "name": "pcasl_3d_Adult", "duration": "03:38", "info": "Generic Views" },
      { "name": "asl_3d_tra_fast", "duration": "02:15" },
      { "name": "resolve_4scan_trace_sag_pons", "duration": "02:13" },
      { "name": "resolve_4scan_trace_cor", "duration": "02:13" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Stroke_Advanced",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_3scan_trace_tra_p2_160", "duration": "02:31" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:56" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "tof_cs_acc7.2", "duration": "02:51" },
      { "name": "t2_space_tra_Navigation", "duration": "03:25" },
      { "name": "vessel_scout_neck", "duration": "00:30" },
      { "name": "pcasl_3d_Adult", "duration": "03:38", "info": "Generic Views" },
      { "name": "vessel_scout_neck", "duration": "00:30" },
      { "name": "tof_fl3d_tra_large", "duration": "04:42" },
      { "name": "t1_space_sag_p2_iso", "duration": "03:19" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_space_sag_p2_iso", "duration": "03:19" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Headache",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:56" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "tof_cs_acc7.2", "duration": "02:51" },
      { "name": "t2_space_tra_Navigation", "duration": "03:25" },
      { "name": "pcasl_3d_Adult", "duration": "03:38", "info": "Generic Views" },
      { "name": "Venogram_Sag", "duration": "04:49" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "t1_space_sag_p2_iso", "duration": "03:19" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Dementia",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:56" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "t2_tse_cor", "duration": "01:02" },
      { "name": "tof_cs_acc7.2", "duration": "02:51" },
      { "name": "t2_space_tra_Navigation", "duration": "03:25" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Giddiness",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:45" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "tof_cs_acc7.2", "duration": "02:51" },
      { "name": "t2_space_tra_Navigation", "duration": "03:25" },
      { "name": "Venogram_Sag", "duration": "04:49" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Neurodegeneration",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:56" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "tof_cs_acc7.2", "duration": "02:51" },
      { "name": "vessel_scout_neck", "duration": "00:30" },
      { "name": "tof_fl3d_tra_large", "duration": "04:42" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Tumour",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:56" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "02:37" },
      { "name": "tof_cs_acc7.2", "duration": "02:51" },
      { "name": "t2_tse_cor", "duration": "01:02" },
      { "name": "t2_space_tra_Navigation", "duration": "03:25" },
      { "name": "vessel_scout_neck", "duration": "00:30" },
      { "name": "tof_fl3d_tra_large", "duration": "04:42" },
      { "name": "pcasl_3d_Adult", "duration": "03:38", "info": "Generic Views" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_twist_tra_p2_dyn T1 Perfusion", "duration": "04:14" },
      { "name": "ep2d_perf_p2 T2 Perfusion", "duration": "01:42" },
      { "name": "t1_mprage_sag_p2_iso_Post Contrast", "duration": "02:37" },
      { "name": "t1_space_sag_p2_iso", "duration": "03:19" },
      { "name": "t2_space_dark-fluid_sag_calpi4", "duration": "03:36" },
      { "name": "csi_slaser_135", "duration": "04:10", "info": "Spectroscopy" },
      { "name": "csi_se_30", "duration": "04:25", "info": "Spectroscopy" },
      { "name": "csi_slaser_270", "duration": "04:25", "info": "Spectroscopy" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Epilepsy",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:07" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:56" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "t2_space_dark-fluid_sag_3D FLAIR", "duration": "04:47" },
      { "name": "t1_tse_tir_tra", "duration": "02:07" },
      { "name": "t1_tse_tir_obl_cor", "duration": "02:17" },
      { "name": "t2_tse_obl_cor_2mm", "duration": "02:14" },
      { "name": "t2_relaxometry_16 echoes", "duration": "04:29" },
      { "name": "pcasl_3d_Adult", "duration": "03:38", "info": "Generic Views" },
      { "name": "csi_slaser_135", "duration": "04:10", "info": "Spectroscopy" },
      { "name": "svs_se_35", "duration": "01:50", "info": "Spectroscopy" },
      { "name": "dir_space_sag_p2_iso", "duration": "05:47" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Pituitary",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t1_tse_sag_p2_2mm_160mm", "duration": "01:46" },
      { "name": "t2_tse_sag_p2_2mm_160mm", "duration": "01:33" },
      { "name": "t2_tse_cor_p2_2mm_160mm", "duration": "01:39" },
      { "name": "t1_tse_cor_p2_2mm_160mm", "duration": "01:46" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:22" },
      { "name": "tof_cs_acc7.2", "duration": "02:59" },
      { "name": "t2_space_tra_Navigation", "duration": "03:25" },
      { "name": "t1_tse_cor_p2_2mm_fs_160mm_Pre", "duration": "01:52" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_tse_cor_p2_2mm_dynamic+++C", "duration": "03:11" },
      { "name": "t1_tse_cor_p2_2mm_fs_160mm", "duration": "01:52" },
      { "name": "t1_tse_sag_p2_2mm_160mm", "duration": "01:46" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:07" },
      { "name": "t1_space_sag_p2_iso", "duration": "03:27" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Orbits",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2", "duration": "03:15" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_tse_stir_cor", "duration": "02:00" },
      { "name": "t2_tse_tra_2.5mm_fs", "duration": "01:50" },
      { "name": "t1_tse_cor_p2_2mm_160mm", "duration": "01:46" },
      { "name": "t1_tse3d_0.9mm_iso_tra", "duration": "02:35" },
      { "name": "t2_space_tra_cs5_iso", "duration": "03:26" },
      { "name": "tof_cs_acc7.2", "duration": "02:59" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:07" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_vibe_fs_tra_p4_dyn", "duration": "02:34" },
      { "name": "t1_tse_fs_cor_3mm_post", "duration": "02:21" },
      { "name": "t1_tse3d_0.9mm_iso_tra", "duration": "02:35" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:07" },
      { "name": "t1_space_sag_p2_iso", "duration": "03:27" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "t1_tse_fs_tra_3mm_post", "duration": "01:28" },
      { "name": "t2_tse_dixon_cor_3mm_orbits", "duration": "02:01" },
      { "name": "t1_tse_dixon_cor_3mm_orbits", "duration": "02:04" },
      { "name": "t2_tse_fs_sag_Right", "duration": "01:30" },
      { "name": "t2_tse_fs_sag_Right", "duration": "01:30" },
      { "name": "t2_tse_tra_2.5mm_fs", "duration": "01:11" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "AVM",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "MPR Planning", "duration": null, "info": "MPR Planning" },
      { "name": "t2_tse_dark-fluid_tra_3mm", "duration": "01:32" },
      { "name": "t2_tse_tra_p3", "duration": "01:20" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "02:53" },
      { "name": "tof_cs_acc7.2", "duration": "03:25" },
      { "name": "Contrast", "duration": null },
      { "name": "angio_twist_sag_iso", "duration": "01:29" },
      { "name": "t1_mprage_sag_p2_iso_+C", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "tof_fl2d_sag_obl_MRV", "duration": "02:59" },
      { "name": "flow_pc3d_tra_venc75", "duration": "04:18" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Swift Deep Resolve Brain",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t1_fl2d_sag_p3", "duration": "00:21", "info": "Generic Views" },
      { "name": "ep2d_diff_tra_p2_s2", "duration": "00:21", "info": "Generic Views" },
      { "name": "t2star+t2_ep2d_se_tra_p2", "duration": "00:25", "info": "Generic Views" },
      { "name": "t2_dark_fluid_ep2d_se_tra_p2", "duration": "00:51", "info": "Generic Views" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "MS",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "MPR Planning", "duration": null, "info": "MPR Planning" },
      { "name": "t2_space_dark-fluid_sag_cs5.6", "duration": "04:00", "info": "MPR Assignment" },
      { "name": "t2_tse_dark-fluid_tra_3mm", "duration": "02:14" },
      { "name": "t2_tse_tra_p3", "duration": "01:20" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "02:53" },
      { "name": "1st Presentation, heavy burden of disease or prior scan", "duration": "yes", "info": "Basic Decision" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_mprage_sag_p2_iso_+C", "duration": "04:08", "info": "MPR Assignment" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "IAMs",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t2_space_tra_cs5_iso", "duration": "03:38", "info": "MPR Assignment" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "02:53" },
      { "name": "t1_tse_r_cor_2mm", "duration": "01:15" },
      { "name": "t2_tse_cor_2mm_fs", "duration": "01:30" },
      { "name": "t1_tse_r_tra_2mm", "duration": "01:31" },
      { "name": "t2_tse_tra_2mm_fs", "duration": "01:14" },
      { "name": "t2_space_tra_iso 0.25mm", "duration": "04:09" },
      { "name": "t2_space_sag_cs5_iso_RT", "duration": "02:35", "info": "MPR Assignment" },
      { "name": "t2_space_sag_cs5_iso_LT", "duration": "02:35", "info": "MPR Assignment" },
      { "name": "Contrast", "duration": "no", "info": "Basic Decision" },
      { "name": "t2_space_TRA_p3_iso FS", "duration": "02:48" },
      { "name": "Contrast", "duration": "yes" },
      { "name": "t1_tse_tra_pre", "duration": "00:44" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_fs_tse_tra + c", "duration": "00:45" },
      { "name": "t1_fs_tse_cor + c", "duration": "00:44" },
      { "name": "t1_mprage_sag_p2_iso_+C", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "Cholesteatoma", "duration": "no", "info": "Basic Decision" },
      { "name": "Cholesteatoma", "duration": "yes" },
      { "name": "t2_space_TRA_p3_iso", "duration": "02:48" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Trigeminal",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "MPR Planning", "duration": null, "info": "MPR Planning" },
      { "name": "t2_tse_dark-fluid_tra_3mm", "duration": "02:14" },
      { "name": "t2_tse_tra_p3", "duration": "01:20" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "02:53" },
      { "name": "t2_space_tra_cs5_iso", "duration": "02:45" },
      { "name": "t1_tse_tra_3mm_BOS", "duration": "01:12" },
      { "name": "t1_vibe_tra_iso_pre", "duration": "02:54", "info": "MPR Assignment" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_fs_vibe_tra_iso_post", "duration": "02:58", "info": "MPR Assignment" },
      { "name": "t1_tse_cor_3mm_post", "duration": "01:09" },
      { "name": "t1_mprage_sag_p2_iso_post", "duration": "04:08", "info": "MPR Assignment" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Hydrocephalus",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "MPR Planning", "duration": null, "info": "MPR Planning" },
      { "name": "t2_tse_dark-fluid_tra_3mm", "duration": "02:14" },
      { "name": "t2_tse_tra_p3", "duration": "01:20" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "02:53" },
      { "name": "t2_tse_sag_2.5mm", "duration": "01:26" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Pineal Cyst",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "04:40", "info": "MPR Assignment" },
      { "name": "MPR Planning", "duration": null, "info": "MPR Planning" },
      { "name": "t2_tse_dark-fluid_tra_3mm", "duration": "01:32" },
      { "name": "t2_tse_tra_p3", "duration": "01:20" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "02:53" },
      { "name": "t2_tse_cor_2mm", "duration": "02:22" },
      { "name": "t2_tse_sag_p2_2mm_160mm", "duration": "00:53" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "TLE",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "00:01" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:44" },
      { "name": "t2_tse_tra", "duration": "00:48" },
      { "name": "t1_se_tra", "duration": "01:37" },
      { "name": "t2_swi_tra_p2", "duration": "01:52" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "MPR Planning", "duration": null, "info": "MPR Planning" },
      { "name": "t2_tse_cor_2mm_TLE", "duration": "02:20" },
      { "name": "t2_tse_dark-fluid_cor", "duration": "02:23" },
      { "name": "t1_tse_tir_cor_p2_3mm", "duration": "02:24" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Sequences",
    "sequences": [
      { "name": "t2_tse_cor_p2_512_3mm", "duration": "02:02" },
      { "name": "t2_space_tra_cs5_iso", "duration": "02:45" },
      { "name": "t1_tse_r_tra_2mm_IACs", "duration": "01:22" },
      { "name": "t1_tse_r_cor_2mm_IACs", "duration": "01:38" },
      { "name": "t1_tse_r_cor_2mm_pit", "duration": "01:38" },
      { "name": "t1_tse_sag_p2_2mm_180mm", "duration": "02:47" },
      { "name": "t2_tse_cor_2mm", "duration": "02:22" },
      { "name": "t1_tse_cor_p2_2mm_dynamic", "duration": "02:16" },
      { "name": "t2_tse_sag", "duration": "01:47" },
      { "name": "t2_tse_dixon_cor_3mm_orbits", "duration": "02:34" },
      { "name": "t1_tse_dixon_cor_3mm_orbits", "duration": "02:20" },
      { "name": "t2_space_dark-fluid_sag_cs5.6", "duration": "04:00", "info": "MPR Assignment" },
      { "name": "t1_space_sag_p2_iso", "duration": "03:53" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Skull Base",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "04:08", "info": "MPR Assignment" },
      { "name": "MPR Planning", "duration": null, "info": "MPR Planning" },
      { "name": "t2_tse_dark-fluid_tra_3mm", "duration": "02:14" },
      { "name": "t2_tse_tra_p3", "duration": "01:20" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "02:53" },
      { "name": "t2_space_tra_cs5_iso", "duration": "02:45" },
      { "name": "t2_tse_fs_cor_3mm", "duration": "01:30" },
      { "name": "t1_vibe_tra_iso", "duration": "02:54", "info": "MPR Assignment" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "TWIST",
    "sequences": [
      { "name": "angio_twist_sag_iso", "duration": "01:29" },
      { "name": "t1_vibe_twist_dixon_tra_p4_bh_art_9phas", "duration": "00:29" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Spectroscopy",
    "sequences": [
      { "name": "___ SVS ___", "duration": null },
      { "name": "svs_se_30", "duration": "02:50", "info": "Spectroscopy" },
      { "name": "Auto Start MR Spectro", "duration": null, "info": "Advanced Application" },
      { "name": "svs_se_135", "duration": "04:26", "info": "Spectroscopy" },
      { "name": "svs_se_270", "duration": "06:34", "info": "Spectroscopy" },
      { "name": "___ CSI ___", "duration": null },
      { "name": "csi_slaser_40", "duration": "04:25", "info": "Spectroscopy" },
      { "name": "Auto Start MR Spectro", "duration": null, "info": "Advanced Application" },
      { "name": "csi_slaser_135", "duration": "04:25", "info": "Spectroscopy" },
      { "name": "csi_slaser_270", "duration": "05:47", "info": "Spectroscopy" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Neuroshield",
    "sequences": [
      { "name": "t1_mprage_sag_Neuroshield", "duration": "05:35" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "misc",
    "sequences": [
      { "name": "t1 spc fs sag iso KM", "duration": "04:40" },
      { "name": "t2 tirm sag dark-fluid", "duration": "04:32" },
      { "name": "SAG T2 3D SPACE", "duration": "03:39" },
      { "name": "AX T1 MPRAGE 3D GADO", "duration": "04:02" },
      { "name": "tof_fl3d_tra", "duration": "05:32" },
      { "name": "tof_fl3d_tra_large", "duration": "05:57" },
      { "name": "t2_tse_cor_2mm_pit", "duration": "01:18" },
      { "name": "t1_tse_r_cor_2mm_pit", "duration": "01:20" },
      { "name": "t2_tse_sag_2mm_pit", "duration": "01:18" },
      { "name": "t1_tse_r_cor-FS_2mm_pit", "duration": "01:21" },
      { "name": "t1_tse_sag_p2_FS-2mm_160mm", "duration": "02:19" },
      { "name": "t1_tse_r_cor-FS_2mm_pit", "duration": "01:21" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Demyelination",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "t2_tse_dark-fluid_tra_3mm", "duration": "02:24" },
      { "name": "resolve_3scan_trace_tra_p2_160", "duration": "02:31" },
      { "name": "t2_swi_wave4_2mm", "duration": "02:37" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:07" },
      { "name": "t2_space_sag_p2_iso", "duration": "03:49" },
      { "name": "t2_tse_cor", "duration": "00:41" },
      { "name": "tof_cs_acc7.2", "duration": "03:25" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:07" },
      { "name": "t1_space_fs_sag_iso_0.9mm", "duration": "06:02" },
      { "name": "t2_space_dark-fluid_sag_caipi4", "duration": "04:21" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "DTI",
    "sequences": [
      { "name": "t1_mprage_sag_p2_iso", "duration": "03:24" },
      { "name": "ep2d_diff_mddw_20_p2", "duration": "03:25" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "PD",
    "sequences": [
      { "name": "t2_swi_tra_p2_1mmHR", "duration": "04:38" },
      { "name": "t2_swi_tra_p2_1.2mmHR", "duration": "04:01" },
      { "name": "t2_me3d_tra_p2_0.5mm", "duration": "05:07" },
      { "name": "pd_tse_tra_spair_2mm", "duration": "03:35" },
      { "name": "t1_tse_tra_spair_2mm", "duration": "03:10" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Flow",
    "sequences": [
      { "name": "___ CSF-flow quantification ___", "duration": null },
      { "name": "csf_flow_fl2d_tra_15through-plane", "duration": "03:02" },
      { "name": "___ CSF-flow visualization ___", "duration": null },
      { "name": "csf_flow_fl2d_sag_6in-plane", "duration": "02:17" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "vessel wall imaging",
    "sequences": [
      { "name": "t1_tse3d_0.9mm_iso_tra", "duration": "04:21" },
      { "name": "pd_space_fs_tra", "duration": "04:44" },
      { "name": "t2_tse3d_0.9mm_iso_tra", "duration": "03:39" },
      { "name": "tof_cs_acc7.2", "duration": "03:14" },
      { "name": "t1_tse3d_tra_neck", "duration": "07:28" },
      { "name": "TOF_13slabs_22mm_FA15_t70", "duration": "04:04" },
      { "name": "___ post contrast ___", "duration": null },
      { "name": "t1_tse3d_0.9mm_iso_tra", "duration": "05:11" },
      { "name": "t1_tse3d_tra_neck", "duration": "07:03" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Tongue",
    "sequences": [
      { "name": "localizer", "duration": "00:11" },
      { "name": "t2_tse_dixon_cor_p2_352", "duration": "02:31" },
      { "name": "t2_tse_tra_dixon", "duration": "02:27" },
      { "name": "t1_tse_dixon_tra_p2_352", "duration": "03:38" },
      { "name": "t2_tse_fs_sag", "duration": "01:56" },
      { "name": "resolve_3scan_trace_tra_p2_160", "duration": "02:40" },
      { "name": "___ Contrast ___", "duration": null },
      { "name": "t1_tse_dixon_tra_p2_352", "duration": "03:38" },
      { "name": "t1_tse_dixon_cor_3mm", "duration": "02:34" },
      { "name": "t1_tse_dixon_sag_3mm", "duration": "02:32" },
      { "name": "t1_starvibe_fs_tra_iso", "duration": "02:50" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "ep2d_diff_b50_800_tra_p2_Lower Neck", "duration": "03:21" },
      { "name": "angio_twist_cor_iso", "duration": "02:14" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Zoomit_Diffusion",
    "sequences": [
      { "name": "ep2d_diff_cor_ZOOMit", "duration": "03:21" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "ASL",
    "sequences": [
      { "name": "pcasl_3d_Child", "duration": "03:13", "info": "Generic Views" },
      { "name": "pcasl_3d_Neonate", "duration": "03:38", "info": "Generic Views" },
      { "name": "pcasl_3d_Adult", "duration": "03:38", "info": "Generic Views" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "STROKE",
    "sequences": [
      { "name": "AAhead_scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "Table Positioning Strategy", "duration": null, "info": "Table Positioning Strategy" },
      { "name": "resolve_3scan_trace_tra_p2_160", "duration": "02:48" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "01:56" },
      { "name": "t2_swi_tra_p2_2.5mm", "duration": "01:25" },
      { "name": "t1_mprage_sag_p2_iso", "duration": "02:30" },
      { "name": "t2_space_tra_cs5_iso", "duration": "02:22", "info": "MPR Assignment" },
      { "name": "FastView", "duration": "00:07" },
      { "name": "tof_cs_acc7.2", "duration": "02:45" },
      { "name": "resolve_3scan_trace_tra_p2_160", "duration": "02:43" },
      { "name": "tof_fl3d_tra_large", "duration": "03:43" },
      { "name": "t2_space_tra_cs5_iso", "duration": "03:14", "info": "MPR Assignment" },
      { "name": "t2_tse_cor", "duration": "00:55" },
      { "name": "t1_tse3d_0.9mm_iso_tra", "duration": "03:32" },
      { "name": "t1_space_sag_p2_iso", "duration": "03:03" },
      { "name": "t2_space_dark-fluid_sag_caipi4", "duration": "03:36" },
      { "name": "t2_space_tra_Navigation", "duration": "05:21" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "CE Angiography",
    "sequences": [
      { "name": "localizer", "duration": "00:17" },
      { "name": "localizer_aorta", "duration": "00:03", "info": "Generic Views" },
      { "name": "vessel_scout_neck", "duration": "00:27" },
      { "name": "angio_fl3d_cor_pre", "duration": "00:18", "info": "Generic Views" },
      { "name": "Check pre images, prepare injector", "duration": null },
      { "name": "Care Bolus", "duration": "01:23", "info": "Care Bolus" },
      { "name": "angio_fl3d_cor_post", "duration": "00:18" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Angio_Phase Contrast MRA",
    "sequences": [
      { "name": "Anglo_Phase Contrast MRA_venc75", "duration": "04:18" }
    ],
    "additional_info": "Head > Brain"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "haste_localizer_cor", "duration": "00:09", "info": "Generic Views" },
      { "name": "haste_localizer_tra", "duration": "00:09", "info": "Generic Views" },
      { "name": "localizer_cor", "duration": "00:09" },
      { "name": "Mouth Closed", "duration": null },
      { "name": "pd_tse_cor_closed", "duration": "01:08" },
      { "name": "pd_tse_sag_closed", "duration": "01:01" },
      { "name": "pd_tse_fs_sag_closed", "duration": "01:23" },
      { "name": "t2_tse_fs_sag_closed", "duration": "00:56" },
      { "name": "Mouth Open", "duration": null },
      { "name": "pd_tse_fs_sag_open", "duration": "01:29" },
      { "name": "pd_tse_sag_open", "duration": "00:59" }
    ],
    "additional_info": "TMJ > TMJ"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "I_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "II_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "III_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag_3mm", "duration": "01:46", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Dorsal", "duration": "01:15", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Lumbar", "duration": "01:10", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2", "duration": "01:30", "info": "Spine Positioning" },
      { "name": "t2_tse_stir_sag", "duration": "01:36", "info": "Spine Positioning" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "t2_space_tra", "duration": "03:05", "info": "Spine Positioning" },
      { "name": "t2_me2d_tra", "duration": "03:04" },
      { "name": "t1_vibe_tra_2mm", "duration": "01:58", "info": "Spine Positioning" },
      { "name": "t2_tse_stir_cor", "duration": "02:56" },
      { "name": "t2_tse_tra", "duration": "01:42", "info": "Spine Positioning" }
    ],
    "additional_info": "Spine > Cervical"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "t1_tse_sag_p2_fs_CS", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs_TS", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs_LS", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_dixon_tra", "duration": "03:01" },
      { "name": "t1_tse_tra_fs", "duration": "02:17" },
      { "name": "t1_vibe_dixon_tra_p2_2mm_352", "duration": "03:16" }
    ],
    "additional_info": "Spine > Cervical"
  },
  {
    "protocol_name": "MS/Trauma",
    "sequences": [
      { "name": "AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag", "duration": "01:14", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2", "duration": "01:25", "info": "Spine Positioning" },
      { "name": "t2_tse_stir_sag", "duration": "01:34", "info": "Spine Positioning" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "t2_tse_tra", "duration": "01:42", "info": "Spine Positioning" },
      { "name": "t1_tse_tra", "duration": "00:59", "info": "Spine Positioning" },
      { "name": "Contrast", "duration": "no", "info": "Basic Decision" },
      { "name": "Contrast", "duration": "yes" },
      { "name": "t1_tse_fs_sag_p2_+C", "duration": "01:35", "info": "Spine Positioning" },
      { "name": "t1_tse_tra_+C", "duration": "01:01", "info": "Spine Positioning" }
    ],
    "additional_info": "Spine > Cervical"
  },
  {
    "protocol_name": "Tumour",
    "sequences": [
      { "name": "AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag", "duration": "01:14", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2", "duration": "01:25", "info": "Spine Positioning" },
      { "name": "t2_tse_stir_sag", "duration": "01:34", "info": "Spine Positioning" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "t2_tse_tra", "duration": "01:42", "info": "Spine Positioning" },
      { "name": "t1_tse_fs_tra", "duration": "01:05", "info": "Spine Positioning" },
      { "name": "Contrast", "duration": "no", "info": "Basic Decision" },
      { "name": "Contrast", "duration": "yes" },
      { "name": "t1_tse_fs_sag_p2_+C", "duration": "01:35", "info": "Spine Positioning" },
      { "name": "t1_tse_fs_tra_+C", "duration": "01:05", "info": "Spine Positioning" }
    ],
    "additional_info": "Spine > Cervical"
  },
  {
    "protocol_name": "Diffusion",
    "sequences": [
      { "name": "resolve_diff_sag_b50_600", "duration": "02:37", "info": "Generic Views" },
      { "name": "resolve_diff_sag_mddw_p2_dti", "duration": "03:49", "info": "Generic Views" }
    ],
    "additional_info": "Spine > Cervical"
  },
  {
    "protocol_name": "misc",
    "sequences": [
      { "name": "t1_tse_fs-dixon_sag_KM", "duration": "03:35" }
    ],
    "additional_info": "Spine > Cervical"
  },
  {
    "protocol_name": "Brachial Plexus",
    "sequences": [
      { "name": "AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag", "duration": "01:14", "info": "Spine Positioning" },
      { "name": "t1_qtse_cor_p2_320", "duration": "02:21" },
      { "name": "t2_tse_cor", "duration": "02:31" },
      { "name": "t2_space_stir_cor_p2_448", "duration": "05:15" },
      { "name": "t1_vibe_dixon_cor_p2_384_iso", "duration": "02:59" },
      { "name": "t1_tse_sag_p2_320", "duration": "01:22" },
      { "name": "pd_tse_dixon_sag", "duration": "02:25" },
      { "name": "t1_tse_tra_p2", "duration": "01:29" },
      { "name": "t2_tse_dixon_tra_p2_352", "duration": "03:20" },
      { "name": "t2_space_tra_p2_2mm", "duration": "03:30" },
      { "name": "t2_tse_cor", "duration": "01:56" }
    ],
    "additional_info": "Spine > Cervical"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "I_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "II_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "III_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag_cervical", "duration": "01:14", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_cervical", "duration": "01:48", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_thoracic", "duration": "01:35", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_thoracic", "duration": "01:36", "info": "Spine Positioning" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "t2_tse_tra_cervical", "duration": "01:42", "info": "Spine Positioning" },
      { "name": "t1_vibe_tra_2mm", "duration": "03:21", "info": "Spine Positioning" },
      { "name": "Lt Obl t2_tse", "duration": "01:14" },
      { "name": "Rt Obl t2_tse", "duration": "01:14" },
      { "name": "t2_tse_tra_thoracic", "duration": "01:03", "info": "Spine Positioning" }
    ],
    "additional_info": "Spine > Cervico-thoracic Spine"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_dixon_tra", "duration": "02:42" },
      { "name": "t1_vibe_dixon_tra_p2_2mm_352", "duration": "03:16" }
    ],
    "additional_info": "Spine > Cervico-thoracic Spine"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "I_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "II_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "III_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag_Cervical", "duration": "01:14" },
      { "name": "t2_tse_sag_Dorsal", "duration": "02:28" },
      { "name": "t2_tse_sag_Lumbar", "duration": "01:29" },
      { "name": "t1_tse_sag_Dorsal", "duration": "02:39" },
      { "name": "t2_tse_stir_sag_Dorsal", "duration": "01:58" },
      { "name": "t2_tse_tra_Dorsal", "duration": "02:56" },
      { "name": "t1_tse_tra_Dorsal", "duration": "01:25" },
      { "name": "Contrast", "duration": "no", "info": "Basic Decision" },
      { "name": "Contrast", "duration": "yes" },
      { "name": "t1_tse_fs_tra_pre", "duration": "01:44" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_tse_sag_fs_Dorsal", "duration": "02:40" },
      { "name": "t1_tse_fs_tra_post", "duration": "01:44" },
      { "name": "Dixon", "duration": "yes" },
      { "name": "t1_tse_dixon_sag_C-spine", "duration": "02:25" },
      { "name": "t1_tse_dixon_sag_D_spine", "duration": "02:57" },
      { "name": "t1_tse_dixon_sag_L_spine", "duration": "02:57" }
    ],
    "additional_info": "Spine > Thoracic"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_dixon_tra", "duration": "02:42" },
      { "name": "t1_vibe_dixon_tra_p2_2mm_352", "duration": "03:16" }
    ],
    "additional_info": "Spine > Thoracic"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "I_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "II_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "III_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag_thoracic", "duration": "01:35", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_thoracic", "duration": "01:36", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_lumbar", "duration": "01:29", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_lumbar", "duration": "02:05", "info": "Spine Positioning" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "t2_tse_thoracic upper", "duration": "01:23", "info": "Spine Positioning" },
      { "name": "t2_tse_thoracic_lower", "duration": "01:23", "info": "Spine Positioning" },
      { "name": "t2_tse_tra_lumbar upper", "duration": "01:54", "info": "Spine Positioning" },
      { "name": "t2_tse_tra_lumbar_lower", "duration": "01:40", "info": "Spine Positioning" },
      { "name": "t2_tse_fs_cor_lumbar", "duration": "01:17", "info": "Spine Positioning" },
      { "name": "t2_tse_tra_lumbar", "duration": "03:20", "info": "Spine Positioning" },
      { "name": "t1_tse_tra_lumbar", "duration": "03:05", "info": "Spine Positioning" }
    ],
    "additional_info": "Spine > Thoraco-lumbar Spine"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_dixon_tra", "duration": "02:42" },
      { "name": "t1_vibe_dixon_tra_p2_2mm_352", "duration": "03:16" }
    ],
    "additional_info": "Spine > Thoraco-lumbar Spine"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "I_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "II_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "III_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag_Cervical", "duration": "01:02", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Dorsal", "duration": "01:02", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Lumbar", "duration": "01:02", "info": "Spine Positioning" },
      { "name": "t1_tse_sag", "duration": "01:13", "info": "Spine Positioning" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "t2_tse_stir_sag", "duration": "01:29", "info": "Spine Positioning" },
      { "name": "t2_tse_tra", "duration": "01:33", "info": "Spine Positioning" },
      { "name": "t2_space_tra", "duration": "03:20", "info": "Spine Positioning" },
      { "name": "t1_tse_cor_SIJ", "duration": "01:19" },
      { "name": "stir_cor_SIJ", "duration": "02:08" }
    ],
    "additional_info": "Spine > Lumbar"
  },
  {
    "protocol_name": "Post Operative / Infection",
    "sequences": [
      { "name": "AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag", "duration": "01:29", "info": "Spine Positioning" },
      { "name": "t1_tse_sag", "duration": "02:05", "info": "Spine Positioning" },
      { "name": "t2_tse_stir_sag", "duration": "01:08", "info": "Spine Positioning" },
      { "name": "t2_tse_fs_cor", "duration": "01:17", "info": "Spine Positioning" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "t2_tse_tra", "duration": "01:40", "info": "Spine Positioning" },
      { "name": "t1_tse_tra", "duration": "00:58", "info": "Spine Positioning" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_tse_fs_sag_+C", "duration": "01:53", "info": "Spine Positioning" },
      { "name": "t1_tse_fs_tra_+C", "duration": "01:02", "info": "Spine Positioning" },
      { "name": "t1_tse_dixon_sag_+C", "duration": "02:45", "info": "Spine Positioning" }
    ],
    "additional_info": "Spine > Lumbar"
  },
  {
    "protocol_name": "Myelogram",
    "sequences": [
      { "name": "t2_space_sag_cs7_iso_myelo", "duration": "03:41" }
    ],
    "additional_info": "Spine > Lumbar"
  },
  {
    "protocol_name": "Plexus",
    "sequences": [
      { "name": "t2_space_stir_cor_cs6_iso", "duration": "05:29" },
      { "name": "t2_tse_tra_1", "duration": "02:05" },
      { "name": "t1_tse_tra_1", "duration": "01:19" }
    ],
    "additional_info": "Spine > Lumbar"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_p2_fs", "duration": "01:31", "info": "Spine Positioning" },
      { "name": "t1_tse_tra_fs", "duration": "01:53" },
      { "name": "t1_vibe_dixon_tra_p2_2mm_352", "duration": "03:16" }
    ],
    "additional_info": "Spine > Lumbar"
  },
  {
    "protocol_name": "Prone Spine",
    "sequences": [
      { "name": "localizer", "duration": "00:19" },
      { "name": "t2_tse_sag_Lumbar", "duration": "01:19" },
      { "name": "t1_tse_sag", "duration": "01:12" },
      { "name": "t2_tse_tra", "duration": "02:06" },
      { "name": "stir_tra", "duration": "02:22" },
      { "name": "t1_vibe_dixon_tra_p4_bh_pre", "duration": "00:16" }
    ],
    "additional_info": "Spine > Lumbar"
  },
  {
    "protocol_name": "Pead Spine",
    "sequences": [
      { "name": "localizer", "duration": "00:21" },
      { "name": "t2_tse_sag_Lumbar", "duration": "02:25", "info": "Spine Positioning" },
      { "name": "t2_tse_stir_sag", "duration": "02:24", "info": "Spine Positioning" },
      { "name": "t1_tse_sag", "duration": "02:08", "info": "Spine Positioning" },
      { "name": "t2_space_tra_p2_1mm", "duration": "03:48" },
      { "name": "stir_tra", "duration": "01:44" },
      { "name": "t1_tse_tra", "duration": "02:37" },
      { "name": "t2_space_sag_iso", "duration": "03:51" }
    ],
    "additional_info": "Spine > Lumbar"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "I_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "II_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "III_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag_Cervical", "duration": "01:20", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Dorsal", "duration": "01:10", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Lumbar", "duration": "01:10", "info": "Spine Positioning" },
      { "name": "___ S T I R ___", "duration": null },
      { "name": "t2_tse_stir_sag", "duration": "01:35" },
      { "name": "t2_tse_stir_sag", "duration": "01:35" },
      { "name": "AutoAlign Verification", "duration": null, "info": "Spine Verification" },
      { "name": "___ Dixon ___", "duration": null },
      { "name": "t1_tse_dixon_sag_C-spine", "duration": "02:25" },
      { "name": "t1_tse_dixon_sag_D_spine", "duration": "02:57" },
      { "name": "t1_tse_dixon_sag_L_spine", "duration": "02:57" },
      { "name": "___ t1_sag ___", "duration": null },
      { "name": "t1_tse_sag_p2_cervical", "duration": "01:25", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_thoracic", "duration": "01:36", "info": "Spine Positioning" },
      { "name": "t1_tse_sag_lumbar", "duration": "02:05", "info": "Spine Positioning" },
      { "name": "___ Stir_Sag ___", "duration": null },
      { "name": "t2_tse_stir_sag_C-Spine", "duration": "01:58" },
      { "name": "t2_tse_stir_sag_D-Spine", "duration": "01:58" },
      { "name": "t2_tse_stir_sag_L-Spine", "duration": "01:58" },
      { "name": "___ Axial ___", "duration": null },
      { "name": "t2_tse_tra_cervical", "duration": "01:42", "info": "Spine Positioning" },
      { "name": "t2_tse_thoracic upper", "duration": "01:23", "info": "Spine Positioning" },
      { "name": "t2_tse_thoracic_lower", "duration": "01:23", "info": "Spine Positioning" },
      { "name": "t2_tse_tra_lumbar upper", "duration": "01:54", "info": "Spine Positioning" },
      { "name": "t2_tse_tra_lumbar_lower", "duration": "01:40", "info": "Spine Positioning" }
    ],
    "additional_info": "Spine > Whole Spine"
  },
  {
    "protocol_name": "Diffusion",
    "sequences": [
      { "name": "resolve_diff_sag_b600_CS", "duration": "02:37" },
      { "name": "resolve_diff_sag_b600_DS", "duration": "02:16" },
      { "name": "resolve_diff_sag_b600_DL", "duration": "02:16" },
      { "name": "resolve_diff_sag_b600_LS", "duration": "02:16" }
    ],
    "additional_info": "Spine > Whole Spine"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer", "duration": "00:19" },
      { "name": "t1_tse_cor", "duration": "01:42" },
      { "name": "stir_cor", "duration": "02:11" },
      { "name": "t1_tse_tra", "duration": "01:33" },
      { "name": "stir_tra", "duration": "01:44" }
    ],
    "additional_info": "Spine > SIJs"
  },
  {
    "protocol_name": "UTE",
    "sequences": [
      { "name": "t1_starvibe_cor", "duration": "05:19" }
    ],
    "additional_info": "Spine > SIJs"
  },
  {
    "protocol_name": "Thorax",
    "sequences": [
      { "name": "localizer_bh_insp", "duration": "00:13" },
      { "name": "t2_trufi_cor_p2_flat breathing", "duration": "01:21" },
      { "name": "t2_blade_fs_tra_p3_mbh_insp", "duration": "01:54" },
      { "name": "t2_blade_cor_p3_320_mbh_insp", "duration": "01:40" },
      { "name": "t2_blade_stir_cor_p3_272_mbh_insp", "duration": "03:08" },
      { "name": "t1_vibe_dixon_tra_p4_320_bh_insp", "duration": "00:18" },
      { "name": "t1_vibe_dixon_cor_p4_320_bh_insp", "duration": "00:19" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "t2_space_stir_cor_p2_320_trig", "duration": "05:31" },
      { "name": "t1_starvibe_dixon_tra_iso", "duration": "05:55" },
      { "name": "t2_tse_stir_tra_p2_mbh_320", "duration": "01:39" }
    ],
    "additional_info": "Thorax > Thorax"
  },
  {
    "protocol_name": "Routine_BR18",
    "sequences": [
      { "name": "localizer", "duration": "00:11" },
      { "name": "Table Positioning Strategy", "duration": null, "info": "Table Positioning Strategy" },
      { "name": "localizer", "duration": "00:11" },
      { "name": "stir_tra_p2", "duration": "03:07" },
      { "name": "t1_fl3d_tra", "duration": "01:25" },
      { "name": "resolve_diff_spair_tra_p2", "duration": "03:45" },
      { "name": "t2_space_tra", "duration": "03:04" },
      { "name": "t2_spc_spair_tra_p3", "duration": "03:34" },
      { "name": "___ Contrast ___", "duration": null },
      { "name": "t1_fl3d_spair_tra_p3_dynaVIEWS_1+5", "duration": "06:46" },
      { "name": "t1_fl3d_spair_tra_delayed", "duration": "01:35" },
      { "name": "ep2d_diff_spair_tra", "duration": "03:00" }
    ],
    "additional_info": "Breast > Breast"
  },
  {
    "protocol_name": "Breast Routine_BI7",
    "sequences": [
      { "name": "localizer", "duration": "00:11" },
      { "name": "Table Positioning Strategy", "duration": null, "info": "Table Positioning Strategy" },
      { "name": "localizer", "duration": "00:11" },
      { "name": "stir_tra_p2", "duration": "03:07" },
      { "name": "t1_fl3d_tra", "duration": "01:24" },
      { "name": "ep2d_diff_spair_tra", "duration": "03:20" },
      { "name": "t2_space_tra", "duration": "03:04" },
      { "name": "___ Contrast ___", "duration": null },
      { "name": "t1_fl3d_spair_tra_p3_dynaVIEWS_1+5", "duration": "06:46" },
      { "name": "t1_fl3d_spair_tra_delayed", "duration": "01:35" },
      { "name": "t1_fl3d_spair_tra_delayed_Body Coil", "duration": "01:24" },
      { "name": "t2_spc_spair_tra_p2", "duration": "03:36" }
    ],
    "additional_info": "Breast > Breast"
  },
  {
    "protocol_name": "Breast_Dixon",
    "sequences": [
      { "name": "localizer", "duration": "00:11" },
      { "name": "Table Positioning Strategy", "duration": null, "info": "Table Positioning Strategy" },
      { "name": "localizer", "duration": "00:11" },
      { "name": "stir_tra_p2", "duration": "03:07" },
      { "name": "t1_fl3d_tra", "duration": "01:53" },
      { "name": "resolve_diff_spair_tra_p2", "duration": "03:45" },
      { "name": "t2_space_tra", "duration": "03:04" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_fl3d_tra_p3_Dixon_1+5_CE", "duration": "06:22" },
      { "name": "t1_fl3d_tra_p3_Dixon_Delayed", "duration": "01:24" }
    ],
    "additional_info": "Breast > Breast"
  },
  {
    "protocol_name": "Abbreviated_Breast",
    "sequences": [
      { "name": "localizer", "duration": "00:11" },
      { "name": "Table Positioning Strategy", "duration": null, "info": "Table Positioning Strategy" },
      { "name": "localizer", "duration": "00:11" },
      { "name": "stir_tra_p2", "duration": "03:07" },
      { "name": "t1_fl3d_tra", "duration": "01:53" },
      { "name": "resolve_diff_spair_tra_p2", "duration": "03:45" },
      { "name": "t2_spc_spair_tra_p3", "duration": "03:34" },
      { "name": "t1_fl3d_spair_tra_Pre", "duration": "01:03" },
      { "name": "___ Contrast ___", "duration": null },
      { "name": "Ultra_Fast_92_Sec", "duration": "01:51" },
      { "name": "t1_fl3d_spair_tra_p3_dynaVIEWS_1+5", "duration": "05:17" },
      { "name": "t1_fl3d_spair_tra_delayed", "duration": "01:03" },
      { "name": "t1_fl3d_spair_tra_delayed_Body Coil", "duration": "01:24" },
      { "name": "ep2d_diff_spair_tra", "duration": "03:00" }
    ],
    "additional_info": "Breast > Breast"
  },
  {
    "protocol_name": "Spectroscopy",
    "sequences": [
      { "name": "svs_se_breast_int", "duration": "03:18", "info": "Spectroscopy" },
      { "name": "svs_se_breast_int_ref", "duration": "00:04", "info": "Spectroscopy" },
      { "name": "Auto Start MR Spectro", "duration": null, "info": "Advanced Application" }
    ],
    "additional_info": "Breast > Breast"
  },
  {
    "protocol_name": "Implant sequences",
    "sequences": [
      { "name": "implant_type_scan", "duration": "00:27", "info": "Generic Views" },
      { "name": "stir_ws_tra_silicone_bilateral", "duration": "03:20" },
      { "name": "stir_ws_sag_silicone_left", "duration": "03:16" },
      { "name": "stir_ws_sag_silicone_right", "duration": "03:16" },
      { "name": "stir_tra_siliconeSat", "duration": "04:10", "info": "Generic Views" },
      { "name": "stir_sag_silicone_sat_left", "duration": "03:05", "info": "Generic Views" },
      { "name": "stir_sag_silicone_sat_right", "duration": "03:05", "info": "Generic Views" }
    ],
    "additional_info": "Breast > Implants"
  },
  {
    "protocol_name": "Breast_Routine",
    "sequences": [
      { "name": "stir_tra_p2", "duration": "03:07" },
      { "name": "t1_fl3d_tra", "duration": "01:58" },
      { "name": "t2_spc_spair_tra_p3", "duration": "03:17" }
    ],
    "additional_info": "Breast > Implants"
  },
  {
    "protocol_name": "mrcp_bh",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:21" },
      { "name": "t2_haste_tra_mbh_1", "duration": "01:36" },
      { "name": "t2_haste_cor_p3_mbh_384", "duration": "01:26" },
      { "name": "t2_haste_tra_fs_mbh", "duration": "01:36" },
      { "name": "t1_fl2d_opp-in_tra_p2_mbh", "duration": "00:34" },
      { "name": "ep2d_diff_b50_800_tra_p2_s2", "duration": "02:04" },
      { "name": "t2_space_cor_p3_trig_384_iso MRCP", "duration": "03:49" },
      { "name": "t2_tse3d_cor_p3_trig_fast MRCP", "duration": "02:35" },
      { "name": "t1_vibe_dixon_cor_p4_bh_320_iso", "duration": "00:11" },
      { "name": "___ (Separator) ___", "duration": null },
      { "name": "t2_haste_fs_cor_p3_mbh_384", "duration": "01:09" },
      { "name": "t2_space_3D_cor_mrcp_bh", "duration": "00:20" },
      { "name": "t2_haste_fs_cor_p2_thick_sl_384_bh", "duration": "00:05" },
      { "name": "t2_space_tra_p2_trig_576", "duration": "04:48" },
      { "name": "t1_vibe_dixon_tra", "duration": "00:11" }
    ],
    "additional_info": "Abdomen > MRCP/Pancreas"
  },
  {
    "protocol_name": "Pancreas",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:21" },
      { "name": "t2_haste_tra_p2_trig_384", "duration": "01:48" },
      { "name": "t2_haste_cor_trig", "duration": "02:13" },
      { "name": "t2_haste_fs_tra_p2_trig_384", "duration": "01:48" },
      { "name": "t1_fl2d_opp-in_tra_p2_mbh", "duration": "00:33" },
      { "name": "t1_vibe_dixon_tra_p4_bh_320", "duration": "00:10" },
      { "name": "ep2d_diff_zoomit_b50_800_tra_trig", "duration": "03:37" },
      { "name": "ep2d_diff_zoomit_b50_800_cor_trig", "duration": "03:32" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "Inform patient to breathe flat.", "duration": null },
      { "name": "Prepare injector", "duration": null },
      { "name": "Inform patient to breathe flat.", "duration": null },
      { "name": "t1_vibe-grasp_fs_tra", "duration": "05:13", "info": "GRASP" },
      { "name": "t1_vibe_dixon_tra +C", "duration": "00:10" },
      { "name": "t1_vibe_dixon_cor_p4_bh_320_iso", "duration": "00:11" },
      { "name": "t1_vibe_dixon_sag", "duration": "00:12" }
    ],
    "additional_info": "Abdomen > MRCP/Pancreas"
  },
  {
    "protocol_name": "mrcp_trig",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:21" },
      { "name": "t2_haste_tra_p2_trig_384", "duration": "01:48" },
      { "name": "t2_haste_cor_trig", "duration": "02:13" },
      { "name": "t2_haste_fs_tra_p2_trig_384", "duration": "01:48" },
      { "name": "ep2d_diff_b50_800_tra_p2_s2", "duration": "02:04" },
      { "name": "t1_vibe_dixon_tra_p4_bh_pre", "duration": "00:11" },
      { "name": "t2_space_cor_p3_trig_384_iso MRCP", "duration": "03:49" },
      { "name": "t2_tse3d_cor_p3_trig_fast MRCP", "duration": "02:35" },
      { "name": "t1_vibe_dixon_cor_p4_bh_320_iso", "duration": "00:11" },
      { "name": "t1_tfl_in-phase_tra_p2_trig", "duration": "02:07" }
    ],
    "additional_info": "Abdomen > MRCP/Pancreas"
  },
  {
    "protocol_name": "Liver",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:21" },
      { "name": "t2_haste_tra_p2_trig_384", "duration": "01:48" },
      { "name": "t2_haste_cor_trig", "duration": "02:13" },
      { "name": "t2_haste_fs_tra_p2_trig_384", "duration": "01:48" },
      { "name": "t1_fl2d_opp-in_tra_p2_mbh", "duration": "00:33" },
      { "name": "ep2d_diff_b50_800_tra_p2_s2", "duration": "02:04" },
      { "name": "t1_vibe_dixon_tra_p4_bh_pre", "duration": "00:11" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "inject contrast agent", "duration": null },
      { "name": "Care Bolus", "duration": "01:23" },
      { "name": "t1_vibe_dixon_tra_p4_bh_arterial", "duration": "00:11" },
      { "name": "t1_vibe_dixon_tra_p4_bh_porto venous", "duration": "00:11" },
      { "name": "t1_vibe_dixon_tra_p4_bh_venous", "duration": "00:11" },
      { "name": "t1_vibe_dixon_tra_p4_bh_delayed", "duration": "00:11" },
      { "name": "t1_vibe_dixon_cor_p4_bh_iso", "duration": "00:11" },
      { "name": "t1_vibe_dixon_sag", "duration": "00:12" },
      { "name": "t1_starvibe_fs_tra_iso", "duration": "02:20" },
      { "name": "t1_starvibe_dixon_tra_320", "duration": "02:30" },
      { "name": "OPTIONAL", "duration": null },
      { "name": "Inform patient to breathe flat.", "duration": null },
      { "name": "Prepare injector", "duration": null },
      { "name": "Inform patient to breathe flat.", "duration": null },
      { "name": "t1_vibe-grasp_fs_tra", "duration": "05:13", "info": "GRASP" },
      { "name": "t1_vibe_dixon_tra +C", "duration": "00:10" },
      { "name": "t1_vibe_dixon_tra_p4_bh_320", "duration": "00:10" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "Liver_Abbreviated",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:21" },
      { "name": "t2_haste_tra_p2_trig_384", "duration": "01:48" },
      { "name": "ep2d_diff_b50_800_tra_p2_s2", "duration": "02:04" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "Inform patient to breathe flat.", "duration": null },
      { "name": "Prepare injector", "duration": null },
      { "name": "t1_vibe-grasp_fs_tra", "duration": "05:13", "info": "GRASP" },
      { "name": "t1_vibe_dixon_cor_p4_bh_320_iso", "duration": "00:11" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "Vibe Dynamic",
    "sequences": [
      { "name": "t1_vibe_dixon_tra_p4_bh_pre", "duration": "00:12" },
      { "name": "inject contrast agent", "duration": null },
      { "name": "t1_vibe_dixon_tra_p4_bh_arterial", "duration": "00:12" },
      { "name": "t1_vibe_dixon_tra_p4_bh_venous", "duration": "00:12" },
      { "name": "t1_vibe_dixon_tra_p4_bh_delayed", "duration": "00:12" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "Twist_Dynamic",
    "sequences": [
      { "name": "t1_vibe_dixon_tra_p4_bh_pre", "duration": "00:11", "info": "Generic Views" },
      { "name": "Check precontrast", "duration": null, "info": "Generic Views" },
      { "name": "Prepare injector", "duration": null },
      { "name": "Care Bolus", "duration": "01:23" },
      { "name": "t1_vibe-twist_dixon_tra_p4_bh_art_5phas", "duration": "00:16" },
      { "name": "t1_vibe_dixon_tra_p4_bh_venous", "duration": "00:11" },
      { "name": "t1_vibe_dixon_tra_p4_bh_delay", "duration": "00:11" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "LiverLab Assist_Fat Fraction",
    "sequences": [
      { "name": "localizer_bh", "duration": null },
      { "name": "t2_haste_cor_p3_mbh_384", "duration": null },
      { "name": "t1_vibe_e-dixon_tra_bh_pre", "duration": null },
      { "name": "Evaluation", "duration": "yes" },
      { "name": "vibe_q-dixon_tra_bh", "duration": "00:13", "info": "Liver Quantification" },
      { "name": "HISTO_bh", "duration": "00:15", "info": "Liver Quantification" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "Elastography",
    "sequences": [
      { "name": "epiMRE_tra_p2_bh_4slc", "duration": "00:13", "info": "Elastography" },
      { "name": "epiMRE_tra_p2_bh_4slc_fract", "duration": "00:13", "info": "Elastography" },
      { "name": "greMRE_tra_p2_mbh_128_4slc_rapid", "duration": "02:19", "info": "Elastography" },
      { "name": "greMRE_tra_p2_mbh_128_4slc_fract", "duration": "02:58", "info": "Elastography" },
      { "name": "greMRE_tra_p2_mbh_128_4slc", "duration": "02:52", "info": "Elastography" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "MapIT",
    "sequences": [
      { "name": "___ T1 mapping ___", "duration": null },
      { "name": "B1Map_for_T1_mapping_bh", "duration": "00:10" },
      { "name": "T1Map_vibe_tra_p3_bh", "duration": "00:21" },
      { "name": "___ T2* mapping ___", "duration": null },
      { "name": "T2starMap_fl2d_fs_tra_mbh", "duration": "01:19" },
      { "name": "___ R2* mapping ___", "duration": null },
      { "name": "R2starMap_fl2d_fs_tra_mbh", "duration": "01:19" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "GRASP",
    "sequences": [
      { "name": "Prepare Injector", "duration": null },
      { "name": "Inform patient to breathe flat.", "duration": null },
      { "name": "t1_vibe-grasp_fs_tra", "duration": "05:13", "info": "GRASP" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "misc",
    "sequences": [
      { "name": "t1_vibe_dixon_tra_dynamic_1.5mm", "duration": "02:07" }
    ],
    "additional_info": "Abdomen > Liver"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:21" },
      { "name": "t2_haste_tra_mbh_1", "duration": "01:36" },
      { "name": "t2_haste_cor_p3_mbh_384", "duration": "01:26" },
      { "name": "t2_haste_tra_fs_mbh", "duration": "01:36" },
      { "name": "ep2d_diff_b50_800_tra_p2_s2", "duration": "02:04" },
      { "name": "t1_vibe_dixon_tra", "duration": "00:11" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_vibe_dixon_cor__p4_bh_320_iso", "duration": "00:11" },
      { "name": "t1_vibe_dixon_tra", "duration": "00:11" },
      { "name": "t1_vibe_dixon_sag", "duration": "00:12" }
    ],
    "additional_info": "Abdomen > Kidneys"
  },
  {
    "protocol_name": "NATIVE_TrueFISP 3D renals",
    "sequences": [
      { "name": "localizer_bh", "duration": "00:16" },
      { "name": "t2_trufi_cor_p2_bh", "duration": "00:20" },
      { "name": "t2_trufi_tra_bh", "duration": "00:19" },
      { "name": "___ respiratory triggered ___", "duration": null },
      { "name": "native_trufi3d_tra_resp_trig", "duration": "01:33" },
      { "name": "___ ECG triggered with Navigator ___", "duration": null },
      { "name": "native_trufi3d_tra_nav_ecg", "duration": "00:19" }
    ],
    "additional_info": "Abdomen > Kidneys"
  },
  {
    "protocol_name": "Urogram",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:24" },
      { "name": "t2_haste_cor_p3_mbh_384", "duration": "01:26" },
      { "name": "t2_haste_tra", "duration": "01:52" },
      { "name": "t2_haste_tra_fs_mbh", "duration": "01:49" },
      { "name": "ep2d_diff_b50_800_tra", "duration": "03:14" },
      { "name": "t1_vibe_dixon_tra", "duration": "00:11" },
      { "name": "t2_trufi_cor_p2_bh", "duration": "00:20" },
      { "name": "___ urography T2 ___", "duration": null },
      { "name": "t2_space_cor_p3_trig_384_iso", "duration": "03:38" },
      { "name": "Contrast", "duration": null },
      { "name": "___ urography T1 ___", "duration": null },
      { "name": "t1_vibe_fs_cor_p2_bh_384_uro", "duration": "00:15" },
      { "name": "t1_vibe_dixon_cor_p4_bh_320_iso", "duration": "00:11" },
      { "name": "t1_vibe_dixon_tra", "duration": "00:11" },
      { "name": "t1_vibe_dixon_sag", "duration": "00:12" }
    ],
    "additional_info": "Abdomen > Kidneys"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer_fb", "duration": "00:21" },
      { "name": "t2_haste_tra", "duration": "01:52" },
      { "name": "t2_haste_tra_fs_mbh", "duration": "01:49" },
      { "name": "t2_haste_cor_p3_mbh_384", "duration": "01:26" },
      { "name": "ep2d_diff_b50_800_tra_p2_s2", "duration": "02:04" },
      { "name": "t2_trufi_cor_p2_bh", "duration": "00:20" },
      { "name": "t2_trufi_tra_p2_bh", "duration": "00:19" },
      { "name": "t1_vibe_dixon_tra", "duration": "00:22" },
      { "name": "t1_vibe_dixon_cor_p4_bh_320_iso", "duration": "00:12" },
      { "name": "t2_trufi_cor_cine", "duration": "02:24" },
      { "name": "t2_haste_cor_p3_cine", "duration": "01:52" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_vibe_dixon_cor__p4_bh_320_iso", "duration": "00:12" },
      { "name": "t1_vibe_dixon_tra", "duration": "00:22" },
      { "name": "t1_vibe_fs_cor_post_dynamic", "duration": "02:30" }
    ],
    "additional_info": "Abdomen > Small Bowel"
  },
  {
    "protocol_name": "Prostate",
    "sequences": [
      { "name": "localiser", "duration": "00:19" },
      { "name": "centre on prostate", "duration": null },
      { "name": "localiser", "duration": "00:19" },
      { "name": "t2_tse_sag", "duration": "01:31" },
      { "name": "t2_tse_tra", "duration": "01:31" },
      { "name": "t2_tse_cor", "duration": "01:36" },
      { "name": "ep2d_diff_zoomit_b50_800_tra", "duration": "03:22" },
      { "name": "t1_tse_tra_p4_384_lymph_nodes", "duration": "01:20" },
      { "name": "t1_tse_tra_fs_pre", "duration": "01:19" },
      { "name": "inject contrast after 2 measurements", "duration": null },
      { "name": "t1_vibe_fs_tra_p4_dyn", "duration": "05:04" },
      { "name": "t1_tse_tra_fs+C", "duration": "01:19" },
      { "name": "t1_tse_sag_fs +C", "duration": "01:49" },
      { "name": "t1_tse_fs_cor_+C", "duration": "01:52" }
    ],
    "additional_info": "Pelvis > Male Pelvis"
  },
  {
    "protocol_name": "Scrotum",
    "sequences": [
      { "name": "localiser", "duration": "00:19" },
      { "name": "t2_tse_sag", "duration": "01:43" },
      { "name": "t2_tse_tra", "duration": "02:10" },
      { "name": "t2_tse_tra_fs", "duration": "02:06" },
      { "name": "t1_tse_tra", "duration": "02:29" },
      { "name": "t1_tse_tra_fs", "duration": "02:06" },
      { "name": "ep2d_diff_b50_800_tra_p2", "duration": "03:26" },
      { "name": "t2_tse_cor", "duration": "02:33" },
      { "name": "Prepare injector", "duration": null },
      { "name": "t1_tse_tra_fs", "duration": "02:06" },
      { "name": "t1_tse_sag_fs", "duration": "01:46" },
      { "name": "t1_tse_sag_fs", "duration": "01:29" }
    ],
    "additional_info": "Pelvis > Male Pelvis"
  },
  {
    "protocol_name": "Optional",
    "sequences": [
      { "name": "___ Optional ___", "duration": null },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "02:00" },
      { "name": "t1_tse_tra", "duration": "01:58" },
      { "name": "t1_tse_tra", "duration": "02:31" },
      { "name": "t1_tse_dixon_tra_CE", "duration": "02:28" },
      { "name": "t1_tse_dixon_cor_CE", "duration": "02:25" },
      { "name": "ep2d_diff_b50_1400_tra_p2", "duration": "04:20" },
      { "name": "t1_tse_dixon_tra", "duration": "02:28" },
      { "name": "t1_vibe_tra_flip_2deg", "duration": "00:55" },
      { "name": "t1_vibe_tra_flip_15deg", "duration": "00:55" }
    ],
    "additional_info": "Pelvis > Male Pelvis"
  },
  {
    "protocol_name": "Spectroscopy",
    "sequences": [
      { "name": "csi3d_se_prostate", "duration": "06:38", "info": "Spectroscopy" }
    ],
    "additional_info": "Pelvis > Male Pelvis"
  },
  {
    "protocol_name": "Cervix",
    "sequences": [
      { "name": "localizer", "duration": "00:34" },
      { "name": "t2_tse_sag", "duration": "02:30" },
      { "name": "t2_tse_tra", "duration": "01:37" },
      { "name": "t2_tse_cor", "duration": "01:38" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "01:49" },
      { "name": "t2_haste_tra_mbh_1", "duration": "02:13" },
      { "name": "resolve_diff_b50_1000_sag", "duration": "03:52" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_vibe_fs_tra_Dynamic_Axial", "duration": "01:28" },
      { "name": "t1_vibe_fs_SAG_p4_dyn", "duration": "02:08" },
      { "name": "t1_tse_fs_cor_+C", "duration": "02:06" },
      { "name": "t1_tse_sag_fs", "duration": "01:49" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "01:49" }
    ],
    "additional_info": "Pelvis > Female Pelvis"
  },
  {
    "protocol_name": "Endometrium",
    "sequences": [
      { "name": "localizer", "duration": "00:34" },
      { "name": "t2_tse_sag", "duration": "02:30" },
      { "name": "t2_tse_tra_obl", "duration": "01:37" },
      { "name": "t2_tse_cor", "duration": "01:38" },
      { "name": "t2_haste_tra_mbh_1", "duration": "02:41" },
      { "name": "t1_vibe_dixon_tra_p2_352_lymph_nodes", "duration": "01:10" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "01:49" },
      { "name": "resolve_diff_b50_1000_sag", "duration": "03:39" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_vibe_fs_sag_Dynamic", "duration": "05:43" },
      { "name": "t1_vibe_dixon_tra_Obl_tra", "duration": "00:12" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "01:49" },
      { "name": "t1_tse_fs_cor_+C", "duration": "01:46" },
      { "name": "t1_vibe_dixon_tra_Upper_Abd", "duration": "00:12" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "ep2d_diff_b50_1000_tra_p2", "duration": "03:32" },
      { "name": "t1_tse_sag_fs +C", "duration": "01:49" },
      { "name": "ep2d_diff_b50_800_tra_p2_Upper Abd", "duration": "06:28" },
      { "name": "t1_tse_tra", "duration": "01:39" },
      { "name": "t1_tse_tra_fs", "duration": "01:32" }
    ],
    "additional_info": "Pelvis > Female Pelvis"
  },
  {
    "protocol_name": "Ovaries",
    "sequences": [
      { "name": "localizer", "duration": "00:34" },
      { "name": "t2_tse_sag", "duration": "02:27" },
      { "name": "t2_tse_tra", "duration": "01:49" },
      { "name": "t2_tse_cor", "duration": "01:53" },
      { "name": "ep2d_diff_b50_1000_tra_p2", "duration": "03:01" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "02:00" },
      { "name": "t2_haste_tra_mbh_1", "duration": "02:41" },
      { "name": "ep2d_diff_b50_1000_tra_p2_Upper Abd", "duration": "03:17" },
      { "name": "ep2d_diff_b50_1000_tra_p2_Upper Abd", "duration": "06:40" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_vibe_fs_tra_Dynamic_Axial", "duration": "04:30" },
      { "name": "t1_vibe_dixon_tra_pelvis +C", "duration": "02:00" },
      { "name": "t1_tse_sag_fs +C", "duration": "01:49" },
      { "name": "t1_tse_fs_cor_+C", "duration": "01:52" },
      { "name": "t1_vibe_dixon_tra_upper_abd + C", "duration": "00:18" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "t1_tse_fs_tra_+C", "duration": "01:52" },
      { "name": "t1_tse_tra", "duration": "01:39" },
      { "name": "t1_tse_tra_fs", "duration": "01:32" }
    ],
    "additional_info": "Pelvis > Female Pelvis"
  },
  {
    "protocol_name": "Fibroid",
    "sequences": [
      { "name": "localizer", "duration": "00:34" },
      { "name": "t2_tse_sag", "duration": "02:04" },
      { "name": "t2_tse_tra", "duration": "01:46" },
      { "name": "t2_tse_cor", "duration": "01:54" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "02:00" },
      { "name": "resolve_diff_b50_1000_sag", "duration": "04:22" },
      { "name": "t2_haste_tra_mbh_1", "duration": "02:41" },
      { "name": "t1_vibe_dixon_tra_p4_bh_pre", "duration": "00:12" },
      { "name": "inject contrast agent", "duration": null },
      { "name": "Care Bolus", "duration": "01:23" },
      { "name": "t1_vibe_dixon_tra_p4_bh_arterial", "duration": "00:12" },
      { "name": "t1_vibe_dixon_tra_p4_bh_venous", "duration": "00:12" },
      { "name": "t1_vibe_dixon_tra_p4_bh_delayed", "duration": "00:12" },
      { "name": "t1_tse_sag_fs +C", "duration": "03:39" },
      { "name": "t1_tse_fs_cor_+C", "duration": "02:06" },
      { "name": "t1_vibe_dixon_tra_Upper_Abd", "duration": "00:12" },
      { "name": "t2_space_tra_p4_Uterine_Anomaly", "duration": "03:31" }
    ],
    "additional_info": "Pelvis > Female Pelvis"
  },
  {
    "protocol_name": "Gradient",
    "sequences": [
      { "name": "t2_me2d_tra GRE", "duration": "03:00" }
    ],
    "additional_info": "Pelvis > Female Pelvis"
  },
  {
    "protocol_name": "Twist",
    "sequences": [
      { "name": "angio_twist_cor_iso", "duration": "03:02" }
    ],
    "additional_info": "Pelvis > Female Pelvis"
  },
  {
    "protocol_name": "Optional",
    "sequences": [
      { "name": "___ Optional ___", "duration": null },
      { "name": "ep2d_diff_b50_800_tra_p2_Upper Abd", "duration": "05:42" },
      { "name": "t1_tse_dixon_tra_384", "duration": "02:24" },
      { "name": "t1_tse_tra", "duration": "02:10" },
      { "name": "t1_tse_tra_fs", "duration": "01:37" },
      { "name": "t1_tse_tra_fs", "duration": "02:11" }
    ],
    "additional_info": "Pelvis > Female Pelvis"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localiser", "duration": "00:19" },
      { "name": "t2_tse_sag", "duration": "01:49" },
      { "name": "t2_tse_tra", "duration": "02:02" },
      { "name": "t1_tse_tra", "duration": "02:10" },
      { "name": "ep2d_diff_b50_800_tra_p2", "duration": "03:08" },
      { "name": "t2_tse_stir_tra", "duration": "02:17" },
      { "name": "t1_tse_tra_fs", "duration": "02:11" },
      { "name": "t2_tse_stir_cor", "duration": "02:23" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_tra_fs", "duration": "02:25" },
      { "name": "t1_tse_fs_cor_+C", "duration": "02:14" },
      { "name": "t1_tse_sag_fs", "duration": "01:56" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "02:01" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "t1_vibe_dixon_tra_p4_Dynamic", "duration": "01:38" },
      { "name": "t1_tse_dixon_tra_CE", "duration": "02:18" },
      { "name": "t1_tse_dixon_cor_384_CE", "duration": "02:35" },
      { "name": "t1_tse_dixon_sag_384_CE", "duration": "02:23" }
    ],
    "additional_info": "Pelvis > Anal Fistula"
  },
  {
    "protocol_name": "Rectum_Ca",
    "sequences": [
      { "name": "localiser", "duration": "00:19" },
      { "name": "t2_tse_sag", "duration": "01:31" },
      { "name": "t2_tse_tra", "duration": "01:37" },
      { "name": "t2_tse_cor", "duration": "01:38" },
      { "name": "t2_haste_tra_mbh", "duration": "01:36" },
      { "name": "t1_tse_tra", "duration": "02:10" },
      { "name": "resolve_diff_b50_800_tra_p2", "duration": "03:24" },
      { "name": "t1_tse_tra_fs", "duration": "01:50" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_tra_fs+C", "duration": "01:50" },
      { "name": "t1_tse_sag_fs+C", "duration": "01:43" },
      { "name": "t1_tse_fs_cor_+C", "duration": "01:52" },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "02:00" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "ep2d_diff_zoomit_b50_800_tra", "duration": "03:43" },
      { "name": "resolve_diff_b50_800_sag", "duration": "03:45" }
    ],
    "additional_info": "Pelvis > Rectum"
  },
  {
    "protocol_name": "Anorectum",
    "sequences": [
      { "name": "localiser", "duration": "00:19" },
      { "name": "t2_tse_sag", "duration": "01:55" },
      { "name": "t2_tse_tra", "duration": "02:10" },
      { "name": "t2_tse_stir_cor", "duration": "02:02" },
      { "name": "ep2d_diff_b50_800_tra_p2", "duration": "03:08" },
      { "name": "t1_tse_tra", "duration": "02:10" },
      { "name": "t2_tse_stir_tra", "duration": "02:08" },
      { "name": "t1_tse_tra_fs", "duration": "02:06" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_vibe_dixon_tra_pelvis", "duration": "02:01" },
      { "name": "t1_tse_tra_fs", "duration": "02:06" },
      { "name": "t1_tse_fs_cor_+C", "duration": "02:14" },
      { "name": "t1_tse_sag_fs", "duration": "01:56" }
    ],
    "additional_info": "Pelvis > Rectum"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer", "duration": "00:19" },
      { "name": "t2_tse_stir_cor", "duration": "02:27" },
      { "name": "t1_tse_cor", "duration": "02:15" },
      { "name": "t2_tse_stir_tra", "duration": "02:31" },
      { "name": "t1_tse_tra", "duration": "02:31" },
      { "name": "t2_tse_tra", "duration": "02:28" },
      { "name": "ep2d_diff_b50_800_tra_p2", "duration": "03:29" },
      { "name": "t2_me2d_tra GRE", "duration": "03:22" },
      { "name": "pd_tse_fs_tra BOTH", "duration": "03:19" },
      { "name": "pd_tse_fs_cor_BOTH", "duration": "02:19" },
      { "name": "pd_tse_fs_sag", "duration": "02:07" },
      { "name": "t1_tse_tra_fs", "duration": "03:03" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_tra fs post", "duration": "02:33" },
      { "name": "t1_tse_sag_fs", "duration": "02:31" },
      { "name": "t1_tse_fs_cor_+C", "duration": "02:53" }
    ],
    "additional_info": "Pelvis > Bony"
  },
  {
    "protocol_name": "Bladder",
    "sequences": [
      { "name": "localiser", "duration": "00:19" },
      { "name": "t2_tse_sag", "duration": "01:31" },
      { "name": "t2_tse_tra", "duration": "01:37" },
      { "name": "t2_tse_cor", "duration": "01:38" },
      { "name": "ep2d_diff_b50_1000_tra_p2", "duration": "03:32" },
      { "name": "t1_tse_tra", "duration": "02:10" },
      { "name": "t1_tse_tra_fs", "duration": "02:25" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_vibe_fs_tra_Dynamic_Axial", "duration": "04:30" },
      { "name": "t1_tse_tra_fs+C", "duration": "01:32" },
      { "name": "t1_tse_sag_fs +C", "duration": "01:49" },
      { "name": "t1_tse_fs_cor_+C", "duration": "01:52" }
    ],
    "additional_info": "Pelvis > Bladder"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "AAShoulder_Scout", "duration": "00:19", "info": "AutoAlign Scout" },
      { "name": "pd_tse_cor_fs", "duration": "01:33" },
      { "name": "pd_tse_fs_tra", "duration": "01:21" },
      { "name": "pd_tse_sag_fs", "duration": "01:36" },
      { "name": "t2_tse_cor", "duration": "01:34" },
      { "name": "t2_me2d_tra GRE", "duration": "01:57" },
      { "name": "t1_tse_sag", "duration": "01:37" },
      { "name": "t2_tse_stir_cor", "duration": "02:00" },
      { "name": "resolve_diff_b50_800_tra_p2_s2", "duration": "03:32" },
      { "name": "pd_space_fs_tra_cs12_iso", "duration": "03:47" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_fs_tra", "duration": "01:40" },
      { "name": "t1_tse_fs_cor", "duration": "01:46" },
      { "name": "t1_tse_fs_sag", "duration": "01:35" }
    ],
    "additional_info": "Upper Extremity > Shoulder"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_fs_tra", "duration": "01:40" },
      { "name": "t1_tse_fs_cor", "duration": "01:46" },
      { "name": "t1_tse_fs_sag", "duration": "01:35" }
    ],
    "additional_info": "Upper Extremity > Shoulder"
  },
  {
    "protocol_name": "Arthrogram with 12ch Body and Spine Coil",
    "sequences": [
      { "name": "localizer", "duration": "00:16" },
      { "name": "localizer_tra_cor_sag", "duration": "00:18" },
      { "name": "pd_tse_fs_tra", "duration": "02:10" },
      { "name": "t1_tse_fs_tra", "duration": "01:38" },
      { "name": "pd_tse_fs_cor", "duration": "01:56" },
      { "name": "t1_tse_fs_cor", "duration": "01:38" },
      { "name": "t1_tse_fs_sag", "duration": "02:14" },
      { "name": "Re-position for ABER - if requested", "duration": null },
      { "name": "localizer", "duration": "00:16" },
      { "name": "localizer_tra_cor_sag", "duration": "00:18" },
      { "name": "t1_tse_ABER", "duration": "02:21", "info": "Generic Views" },
      { "name": "pd_tse_fs_ABER", "duration": "01:28", "info": "Generic Views" }
    ],
    "additional_info": "Upper Extremity > Shoulder"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "Centre on head of humerus", "duration": null },
      { "name": "FastView", "duration": "00:11" },
      { "name": "t2_stir_cor", "duration": "03:07" },
      { "name": "t1_cor", "duration": "02:04" },
      { "name": "t2_stir_sag", "duration": "01:31" },
      { "name": "t1_sag", "duration": "01:24" },
      { "name": "t1_tse_tra", "duration": "01:56" },
      { "name": "t2_tse_stir_ax", "duration": "04:00" }
    ],
    "additional_info": "Upper Extremity > Humerus"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer", "duration": "00:08" },
      { "name": "localizer_sag+cor+tra", "duration": "00:11" },
      { "name": "pd_tse_tra", "duration": "01:07" },
      { "name": "pd_tse_fs_tra", "duration": "01:35" },
      { "name": "pd_tse_fs_cor", "duration": "01:22" },
      { "name": "pd_tse_fs_sag", "duration": "01:22" },
      { "name": "pd_tse_sag", "duration": "01:26" },
      { "name": "pd_tse_cor", "duration": "01:26" },
      { "name": "___ Optional ___", "duration": null },
      { "name": "t1_tse_cor", "duration": "01:26" }
    ],
    "additional_info": "Upper Extremity > Elbow (Ultra_Flex)"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:07" },
      { "name": "localizer_sag+cor+tra", "duration": "00:12" },
      { "name": "t1_tse_cor 2mm", "duration": "01:45" },
      { "name": "pd_tse_fs_cor", "duration": "02:00" },
      { "name": "pd_tse_tra_fs", "duration": "02:11" },
      { "name": "pd_tse_fs_sag", "duration": "02:05" },
      { "name": "t1_tse_tra_2mm", "duration": "01:40" },
      { "name": "t2_tse_tra_384", "duration": "01:46" },
      { "name": "t2_me2d_cor_gre", "duration": "02:32" },
      { "name": "t2_de3d_we_cor_iso", "duration": "03:21" },
      { "name": "ep2d_diff_zoomit_b50_800_tra", "duration": "03:07" },
      { "name": "pd_space_fs_cor_cs5_iso", "duration": "03:27" },
      { "name": "t2_tse_stir_cor_Hand", "duration": "01:54" },
      { "name": "t1_tse_cor 2mm_Hand", "duration": "01:18" }
    ],
    "additional_info": "Upper Extremity > Wrist"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:07" },
      { "name": "localizer_sag+cor+tra", "duration": "00:10" },
      { "name": "t2_tse_fs_cor", "duration": "01:19" },
      { "name": "t1_tse_cor", "duration": "00:47" },
      { "name": "pd_tse_fs_tra", "duration": "01:19" },
      { "name": "pd_tse_tra", "duration": "01:51" },
      { "name": "pd_tse_sag", "duration": "02:10" },
      { "name": "t2_tse_fs_sag", "duration": "01:28" },
      { "name": "t1_tse_tra", "duration": "01:31" },
      { "name": "t1_tse_sag", "duration": "02:54" }
    ],
    "additional_info": "Upper Extremity > Hand"
  },
  {
    "protocol_name": "Angiogram",
    "sequences": [
      { "name": "angio_twist_hand", "duration": "02:51" }
    ],
    "additional_info": "Upper Extremity > Hand"
  },
  {
    "protocol_name": "Synovitis",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:07" },
      { "name": "localizer_sag+cor+tra", "duration": "00:10" },
      { "name": "t2_tse_fs_cor", "duration": "01:19" },
      { "name": "t2_tse_cor", "duration": "01:27" },
      { "name": "t1_tse_cor", "duration": "00:47" },
      { "name": "t1_tse_tra", "duration": "01:31" },
      { "name": "pd_tse_fs_tra", "duration": "01:19" },
      { "name": "pd_tse_sag", "duration": "02:10" },
      { "name": "t2_tse_fs_sag", "duration": "01:28" },
      { "name": "t1_tse_fs_cor_pre", "duration": "00:38" },
      { "name": "Contrast", "duration": null },
      { "name": "angio_twist_hand", "duration": "02:07" },
      { "name": "t1_tse_fs_cor_+C", "duration": "00:38" },
      { "name": "t1_tse_fs_tra_+C", "duration": "01:58" }
    ],
    "additional_info": "Upper Extremity > Hand"
  },
  {
    "protocol_name": "UTE",
    "sequences": [
      { "name": "3D_Bone_Wrist", "duration": "04:05" },
      { "name": "Finger_3D_bone", "duration": "04:25" }
    ],
    "additional_info": "Upper Extremity > Hand"
  },
  {
    "protocol_name": "Finger",
    "sequences": [
      { "name": "t1_tse_tra_2mm", "duration": "01:58" },
      { "name": "t2_tse_tra_384", "duration": "02:01" },
      { "name": "pd_tse_tra_fs", "duration": "02:20" },
      { "name": "pd_tse_fs_sag", "duration": "01:24" }
    ],
    "additional_info": "Upper Extremity > Hand"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:07" },
      { "name": "localizer_sag+cor+tra", "duration": "00:10" },
      { "name": "pd_tse_cor_2mm", "duration": "01:04" },
      { "name": "pd_tse_fs_cor_2mm", "duration": "01:02" },
      { "name": "t1_tse_cor_2mm", "duration": "00:31" },
      { "name": "pd_tse_sag_2mm", "duration": "01:34" },
      { "name": "pd_tse_fs_sag_2mm", "duration": "01:23" },
      { "name": "pd_tse_tra_p2_s2", "duration": "01:16" },
      { "name": "pd_tse_tra_2mm_fs", "duration": "02:07" },
      { "name": "___ Small_Fov ___", "duration": null },
      { "name": "pd_tse_tra_2mm_fs", "duration": "03:51" },
      { "name": "pd_tse_tra_p2_s2_50", "duration": "02:38" },
      { "name": "Contrast", "duration": "no", "info": "Basic Decision" },
      { "name": "Contrast", "duration": "yes" },
      { "name": "t1_tse_fs_sag + C", "duration": "01:12" },
      { "name": "t1_tse_fs_tra_p2_s2 + C", "duration": "01:08" },
      { "name": "t1_tse_fs_cor + C", "duration": "00:50" }
    ],
    "additional_info": "Upper Extremity > Finger"
  },
  {
    "protocol_name": "Others",
    "sequences": [
      { "name": "t1_tse_sag_2mm", "duration": "00:58" }
    ],
    "additional_info": "Upper Extremity > Finger"
  },
  {
    "protocol_name": "Knee_Routine",
    "sequences": [
      { "name": "AAKnee_Scout", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "pd_tse_fs_sag_2.5mm", "duration": "02:13" },
      { "name": "pd_tse_fs_tra_2.5mm", "duration": "02:30" },
      { "name": "t1_tse_sag_2.5mm", "duration": "01:33" },
      { "name": "pd_tse_fs_cor_2.5mm", "duration": "02:08" },
      { "name": "t2_tse_sag_2.5mm", "duration": "01:56" },
      { "name": "t2_tse_stir_cor", "duration": "02:12" },
      { "name": "t2_me2d_tra GRE", "duration": "02:25" },
      { "name": "pd_space_fs_sag_cs7_iso", "duration": "04:25" }
    ],
    "additional_info": "Lower Extremity > Knee"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_fs_tra", "duration": "01:49" },
      { "name": "t1_tse_fs_cor", "duration": "01:46" },
      { "name": "t1_tse_fs_sag", "duration": "01:35" }
    ],
    "additional_info": "Lower Extremity > Knee"
  },
  {
    "protocol_name": "Options",
    "sequences": [
      { "name": "___ Optional ___", "duration": null },
      { "name": "t2_me2d_tra GRE", "duration": "02:25" },
      { "name": "t2_de3d_we_sag_iso", "duration": "03:18" },
      { "name": "T2Map_anatomical", "duration": "03:43" },
      { "name": "cine_trufi_sag popliteal entrapment", "duration": "00:12" },
      { "name": "resolve_diff_b50_800_tra_p2_s2", "duration": "03:32" }
    ],
    "additional_info": "Lower Extremity > Knee"
  },
  {
    "protocol_name": "12ch body coil for large knee",
    "sequences": [
      { "name": "localizer", "duration": "00:06" },
      { "name": "localizer_sag+cor+tra", "duration": "00:11" },
      { "name": "pd_tse_fs_tra", "duration": "03:33" },
      { "name": "t1_tse_cor", "duration": "03:06" },
      { "name": "pd_tse_fs_cor", "duration": "03:35" },
      { "name": "pd_tse_sag", "duration": "03:35" },
      { "name": "pd_tse_fs_sag", "duration": "03:24" }
    ],
    "additional_info": "Lower Extremity > Knee"
  },
  {
    "protocol_name": "TOF Popliteal",
    "sequences": [
      { "name": "localizer", "duration": "00:10" },
      { "name": "tof_fl2d_tra_ecg", "duration": "02:12" },
      { "name": "cine_trufi_sag popliteal entrapment", "duration": "00:12" }
    ],
    "additional_info": "Lower Extremity > Knee"
  },
  {
    "protocol_name": "UTE",
    "sequences": [
      { "name": "3D Bone Coronal", "duration": "04:26" }
    ],
    "additional_info": "Lower Extremity > Knee"
  },
  {
    "protocol_name": "Twist Angio",
    "sequences": [
      { "name": "angio_twist_tra", "duration": "03:37" },
      { "name": "angio_twist_sag_iso", "duration": "01:20" }
    ],
    "additional_info": "Lower Extremity > Knee"
  },
  {
    "protocol_name": "Hip",
    "sequences": [
      { "name": "localizer", "duration": "00:19" },
      { "name": "t2_tse_stir_cor", "duration": "02:27" },
      { "name": "t1_tse_cor", "duration": "02:15" },
      { "name": "t2_tse_stir_tra", "duration": "02:31" },
      { "name": "t1_tse_tra", "duration": "02:31" },
      { "name": "t2_tse_tra", "duration": "02:28" },
      { "name": "ep2d_diff_b50_800_tra_p2", "duration": "03:29" },
      { "name": "t2_me2d_tra GRE", "duration": "03:22" },
      { "name": "pd_tse_fs_tra BOTH", "duration": "03:19" },
      { "name": "pd_tse_fs_cor_BOTH", "duration": "02:19" },
      { "name": "pd_tse_fs_sag", "duration": "02:07" },
      { "name": "t1_tse_tra_fs", "duration": "03:03" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_tra_fs POST", "duration": "03:03" },
      { "name": "t1_tse_cor_fs POST", "duration": "02:31" },
      { "name": "t1_tse_sag_fs POST", "duration": "01:49" }
    ],
    "additional_info": "Lower Extremity > Hip"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "AAHip_Scout", "duration": "00:22", "info": "AutoAlign Scout" },
      { "name": "pd_tse_fs_cor", "duration": "01:10" },
      { "name": "t2_tse_stir_cor", "duration": "01:35" },
      { "name": "t1_tse_cor", "duration": "01:13" },
      { "name": "___ Uni_Lateral ___", "duration": null },
      { "name": "pd_tse_fs_tra", "duration": "01:58" },
      { "name": "pd_tse_fs_sag", "duration": "02:03" },
      { "name": "pd_tse_fs_cor", "duration": "01:44" },
      { "name": "pd_tse_tra", "duration": "01:10" },
      { "name": "___ Both ___", "duration": null },
      { "name": "t1_tse_tra_bilat", "duration": "01:55" },
      { "name": "t2_tse_stir_tra_bilat", "duration": "02:01" },
      { "name": "pd_tse_tra", "duration": "01:50" },
      { "name": "pd_tse_tra-Oblique", "duration": "01:50" },
      { "name": "pd_tse_cor", "duration": "01:50" },
      { "name": "pd_tse_sag", "duration": "02:18" }
    ],
    "additional_info": "Lower Extremity > Hip"
  },
  {
    "protocol_name": "UTE",
    "sequences": [
      { "name": "t1_starvibe_cor", "duration": "04:29" }
    ],
    "additional_info": "Lower Extremity > Hip"
  },
  {
    "protocol_name": "Options",
    "sequences": [
      { "name": "t2_me2d_tra GRE", "duration": "02:43" },
      { "name": "pd_tse_fs_tra_512_bilat", "duration": "01:36" }
    ],
    "additional_info": "Lower Extremity > Hip"
  },
  {
    "protocol_name": "SI Joints",
    "sequences": [
      { "name": "AAHip_Scout", "duration": "00:22", "info": "AutoAlign Scout" },
      { "name": "stir_cor", "duration": "02:11" },
      { "name": "t1_tse_cor", "duration": "01:28" },
      { "name": "stir_tra", "duration": "01:44" },
      { "name": "t1_tse_tra", "duration": "01:06" }
    ],
    "additional_info": "Lower Extremity > Hip"
  },
  {
    "protocol_name": "Ankle_Routine",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:11" },
      { "name": "localizer_sag+cor+tra", "duration": "00:20" },
      { "name": "pd_tse_fs_sag", "duration": "01:25" },
      { "name": "pd_tse_fs_cor", "duration": "01:59" },
      { "name": "pd_tse_fs_tra", "duration": "01:35" },
      { "name": "t1_tse_tra", "duration": "01:37" },
      { "name": "t1_tse_cor", "duration": "01:34" },
      { "name": "t2_tse_tra", "duration": "01:34" },
      { "name": "t2_me2d_sag_gre", "duration": "02:08" },
      { "name": "resolve_diff_b50_800_tra_p2_s2", "duration": "03:32" }
    ],
    "additional_info": "Lower Extremity > Ankle"
  },
  {
    "protocol_name": "Post Contrast",
    "sequences": [
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_fs_tra", "duration": "01:40" },
      { "name": "t1_tse_fs_cor", "duration": "01:46" },
      { "name": "t1_tse_fs_sag", "duration": "01:35" }
    ],
    "additional_info": "Lower Extremity > Ankle"
  },
  {
    "protocol_name": "Optional",
    "sequences": [
      { "name": "___ Optional ___", "duration": null },
      { "name": "t1_tse_sag_whole_foot", "duration": "01:48" },
      { "name": "pd_space_fs_sag_p4_iso", "duration": "04:27" },
      { "name": "t2_de3d_we_sag_iso", "duration": "03:34" },
      { "name": "t2_tse_stir_tra", "duration": "01:40" },
      { "name": "t2_me2d_tra_gre", "duration": "02:33" },
      { "name": "t2_tse_stir_sag", "duration": "01:44" },
      { "name": "t1_tse_sag", "duration": "01:02" },
      { "name": "t2_de3d_we_sag_iso_256", "duration": "02:54" },
      { "name": "pd_tse_tra", "duration": "01:05" },
      { "name": "pd_tse_cor", "duration": "01:06" }
    ],
    "additional_info": "Lower Extremity > Ankle"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:11" },
      { "name": "localizer_sag+cor+tra", "duration": "00:15" },
      { "name": "t2_tse_stir_sag", "duration": "02:21" },
      { "name": "pd_tse_sag", "duration": "01:31" },
      { "name": "t2_tse_stir_TRA", "duration": "03:18" },
      { "name": "t1_tse_tra_long axis", "duration": "02:02" },
      { "name": "t2_tse_stir_COR", "duration": "01:53" },
      { "name": "pd_tse_COR", "duration": "01:30" },
      { "name": "Pause", "duration": null },
      { "name": "pd_tse_short_axis_p2", "duration": "01:58" },
      { "name": "t1_tse_sag_whole_foot", "duration": "01:21" },
      { "name": "pd_tse_fs_sag", "duration": "01:48" },
      { "name": "pd_tse_fs_long_axis", "duration": "01:47" },
      { "name": "t1_tse_tra_long axis", "duration": "01:13" },
      { "name": "pd_tse_fs_short_axis", "duration": "01:33" }
    ],
    "additional_info": "Lower Extremity > Foot > Foot"
  },
  {
    "protocol_name": "Forefoot",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:11" },
      { "name": "localizer_sag+cor+tra", "duration": "00:15" },
      { "name": "t2_tse_stir_sag", "duration": "02:21" },
      { "name": "pd_tse_sag", "duration": "01:31" },
      { "name": "t2_tse_stir_TRA", "duration": "03:18" },
      { "name": "t1_tse_tra_long axis", "duration": "02:02" },
      { "name": "t2_tse_stir_COR", "duration": "01:53" },
      { "name": "pd_tse_COR", "duration": "01:30" },
      { "name": "Pause", "duration": null },
      { "name": "pd_tse_short_axis_p2", "duration": "01:58" },
      { "name": "t1_tse_sag_whole_foot", "duration": "01:21" },
      { "name": "pd_tse_fs_sag", "duration": "01:48" },
      { "name": "pd_tse_fs_long_axis", "duration": "01:47" },
      { "name": "t1_tse_tra_long axis", "duration": "01:13" },
      { "name": "pd_tse_fs_short_axis", "duration": "01:33" }
    ],
    "additional_info": "Lower Extremity > Foot > Forefoot"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer_tra", "duration": "00:11" },
      { "name": "localizer_sag+cor+tra", "duration": "00:15" },
      { "name": "t1_tse_sag_whole_foot", "duration": "01:17" },
      { "name": "pd_tse_fs_sag", "duration": "01:48" },
      { "name": "pd_tse_fs_long_axis", "duration": "01:53" },
      { "name": "t1_tse_tra_long axis", "duration": "01:18" },
      { "name": "pd_tse_fs_short_axis", "duration": "01:31" },
      { "name": "pd_tse_short_axis_p2", "duration": "02:06" },
      { "name": "Gradient Echo for Tumour", "duration": "yes", "info": "Basic Decision" },
      { "name": "GRE", "duration": "01:19" },
      { "name": "Contrast", "duration": "yes", "info": "Basic Decision" },
      { "name": "t1_tse_fs_long_axis_pre", "duration": "00:53" },
      { "name": "Contrast", "duration": null },
      { "name": "t1_tse_fs_long_axis_post", "duration": "00:53" },
      { "name": "t1_tse_fs_short_axis_p2", "duration": "01:53" }
    ],
    "additional_info": "Lower Extremity > Foot > Whole Foot"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer", "duration": "00:31" },
      { "name": "t2_tse_dixon_tra_bilat_p2", "duration": "02:25" },
      { "name": "t1_tse_tra_bilat", "duration": "02:14" },
      { "name": "t1_tse_sag", "duration": "01:52" },
      { "name": "t2_tse_fs_sag", "duration": "02:34" },
      { "name": "t1_tse_tra", "duration": "00:54" },
      { "name": "t2_tse_fs_tra", "duration": "01:31" }
    ],
    "additional_info": "Lower Extremity > Hemi Pelvis"
  },
  {
    "protocol_name": "Options",
    "sequences": [
      { "name": "t2_tse_stir_cor", "duration": "01:23" },
      { "name": "t2_tse_stir_sag", "duration": "02:23" }
    ],
    "additional_info": "Lower Extremity > Hemi Pelvis"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "localizer", "duration": "00:25" },
      { "name": "localizer_3_planes", "duration": "00:25" },
      { "name": "t2_tse_fs_tra", "duration": "01:25" },
      { "name": "t1_tse_tra", "duration": "01:39" },
      { "name": "t2_tse_fs_cor", "duration": "01:32" },
      { "name": "t1_tse_cor", "duration": "01:36" },
      { "name": "t2_tse_fs_sag", "duration": "01:45" },
      { "name": "t1_tse_sag", "duration": "01:42" }
    ],
    "additional_info": "Lower Extremity > Symphasis Pubis"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "Centre on Iliac Crest", "duration": null },
      { "name": "FastView", "duration": "00:17" },
      { "name": "pd_tse_fs_cor", "duration": "03:14" },
      { "name": "t1_tse_cor", "duration": "02:54" },
      { "name": "PDFS or DIXON", "duration": null, "info": "Basic Decision" },
      { "name": "pd_tse_fs_sag", "duration": "04:50", "info": "PDFS" },
      { "name": "pd_tse_fs_tra", "duration": "05:48", "info": "PDFS" },
      { "name": "pd_tse_dixon_sag_unilat", "duration": "03:34", "info": "DIXON" },
      { "name": "t1_tse_tra", "duration": "05:08" }
    ],
    "additional_info": "Lower Extremity > Hamstring"
  },
  {
    "protocol_name": "B/L_Thigh",
    "sequences": [
      { "name": "FastView", "duration": "00:15" },
      { "name": "t2_tse_stir_cor", "duration": "04:38" },
      { "name": "t1_tse_cor", "duration": "03:02" },
      { "name": "t2_tse_stir_tra", "duration": "02:36" },
      { "name": "t1_tse_tra", "duration": "02:38" },
      { "name": "t2_tse_tra", "duration": "02:34" },
      { "name": "t2_me2d_tra GRE", "duration": "01:36" },
      { "name": "ep2d_diff_b50_800_tra_p2", "duration": "02:43" },
      { "name": "___ Post Contrast ___", "duration": null },
      { "name": "t1_tse_dixon_tra_400_p2_s2", "duration": "03:13" },
      { "name": "t1_tse_dixon_cor_512_bilat_p2_s2", "duration": "03:10" }
    ],
    "additional_info": "Lower Extremity > Long Bone"
  },
  {
    "protocol_name": "B/L_Leg",
    "sequences": [
      { "name": "FastView", "duration": "00:17" },
      { "name": "t2_tse_stir_cor", "duration": "04:38" },
      { "name": "t1_tse_cor", "duration": "03:02" },
      { "name": "t2_tse_stir_tra", "duration": "02:36" },
      { "name": "t1_tse_tra", "duration": "02:38" },
      { "name": "t2_tse_tra", "duration": "02:34" },
      { "name": "t2_me2d_tra GRE", "duration": "01:36" },
      { "name": "ep2d_diff_b50_800_tra_p2", "duration": "02:43" }
    ],
    "additional_info": "Lower Extremity > Long Bone"
  },
  {
    "protocol_name": "Single Station",
    "sequences": [
      { "name": "FastView", "duration": "00:20" },
      { "name": "t1_cor", "duration": "01:46" },
      { "name": "t2_stir_cor", "duration": "01:19" },
      { "name": "t2_tse_fs_tra", "duration": "02:28" },
      { "name": "t1_tse_tra", "duration": "01:48" },
      { "name": "t1_sag", "duration": "01:24" },
      { "name": "t2_stir_sag", "duration": "01:10" }
    ],
    "additional_info": "Lower Extremity > Long Bone"
  },
  {
    "protocol_name": "Care Bolus 4 steps",
    "sequences": [
      { "name": "Position 180mm above feet - Feet first", "duration": null },
      { "name": "FastView", "duration": "00:32" },
      { "name": "localizer_aorta", "duration": "00:22" },
      { "name": "Vessel Scout", "duration": "yes", "info": "Basic Decision" },
      { "name": "vessel_scout", "duration": "01:42", "info": "Generic Views" },
      { "name": "IV_angio_fl3d_cor_abd_pre", "duration": "00:12", "info": "Generic Views" },
      { "name": "III_angio_fl3d_cor_upper_legs_pre", "duration": "00:14", "info": "Generic Views" },
      { "name": "II_angio_fl3d_cor_legs_pre", "duration": "00:15", "info": "Generic Views" },
      { "name": "I_angio_fl3d_cor_feet_pre", "duration": "00:25", "info": "Generic Views" },
      { "name": "Check pre images, prepare injector", "duration": null },
      { "name": "Care Bolus", "duration": "01:21", "info": "Care Bolus" },
      { "name": "IV_angio_fl3d_cor_abd_post", "duration": "00:12" },
      { "name": "III_angio_fl3d_cor_upper_legs_post", "duration": "00:14" },
      { "name": "II_angio_fl3d_cor_legs_post", "duration": "00:15" },
      { "name": "I_angio_fl3d_cor_feet_post", "duration": "00:25" },
      { "name": "TWIST feet", "duration": "yes", "info": "Basic Decision" },
      { "name": "I_angio_twist_cor_iso_feet", "duration": "03:14", "info": "Generic Views" }
    ],
    "additional_info": "peripheral angiography > Angio Assist"
  },
  {
    "protocol_name": "QISS",
    "sequences": [
      { "name": "PERU positioning", "duration": null },
      { "name": "FastView", "duration": "00:33", "info": "Generic Views" },
      { "name": "RR interval > 800ms", "duration": null, "info": "Basic Decision" },
      { "name": "qiss_trufi_tra_ecg", "duration": "06:08", "info": "RR interval > 800ms" },
      { "name": "RR interval < 800ms", "duration": null, "info": "Basic Decision" },
      { "name": "qiss_trufi_tra_ecg_fast", "duration": "05:28", "info": "RR interval < 800ms" }
    ],
    "additional_info": "peripheral angiography > angiography"
  },
  {
    "protocol_name": "QISS_library",
    "sequences": [
      { "name": "___ RR interval > 800 ms ___", "duration": null },
      { "name": "qiss_trufi_tra_ecg", "duration": "00:46" },
      { "name": "qiss_flash_tra_ecg_bh", "duration": "01:40" },
      { "name": "qiss_trufi_tra_highres_ecg", "duration": "01:40" },
      { "name": "___ RR interval < 800 ms ___", "duration": null },
      { "name": "qiss_trufi_tra_fast_hr_ecg", "duration": "00:39" },
      { "name": "qiss_flash_tra_fast_hr_ecg_bh", "duration": "01:21" },
      { "name": "qiss_trufi_tra_fast_hr_highres_ecg", "duration": "01:22" }
    ],
    "additional_info": "peripheral angiography > angiography"
  },
  {
    "protocol_name": "NATIVE_SPACE legs",
    "sequences": [
      { "name": "FastView", "duration": "00:24" },
      { "name": "cine_TD_scout", "duration": "00:15" },
      { "name": "native_space_cor_ecg", "duration": "04:54", "info": "Generic Views" }
    ],
    "additional_info": "peripheral angiography > angiography"
  },
  {
    "protocol_name": "TOF legs",
    "sequences": [
      { "name": "localizer", "duration": "00:10" },
      { "name": "tof_fl2d_tra_ecg", "duration": "02:12" }
    ],
    "additional_info": "peripheral angiography > angiography"
  },
  {
    "protocol_name": "Vessel Scout",
    "sequences": [
      { "name": "vessel_scout", "duration": "02:19", "info": "Generic Views" },
      { "name": "vessel_scout", "duration": "01:09", "info": "Generic Views" }
    ],
    "additional_info": "peripheral angiography > angiography ce"
  },
  {
    "protocol_name": "TWIST",
    "sequences": [
      { "name": "angio_twist_cor_iso_leg", "duration": "02:23" },
      { "name": "angio_twist_cor_iso_feet", "duration": "03:14" }
    ],
    "additional_info": "peripheral angiography > angiography ce"
  },
  {
    "protocol_name": "Care Bolus 4 steps",
    "sequences": [
      { "name": "Feet first - Position 20cm / 7in above feet", "duration": null },
      { "name": "FastView", "duration": "00:32" },
      { "name": "vessel_scout", "duration": "01:42", "info": "Generic Views" },
      { "name": "angio_fl3d_cor_pre", "duration": "01:08" },
      { "name": "Prepare Injector", "duration": null },
      { "name": "Care Bolus cor", "duration": "01:30" },
      { "name": "angio_fl3d_cor_post", "duration": "01:08" },
      { "name": "angio_twist_cor_iso_feet_post", "duration": "02:03" }
    ],
    "additional_info": "peripheral angiography > angiography ce"
  },
  {
    "protocol_name": "Tim_Planning_Routine",
    "sequences": [
      { "name": "Use Body-12 x 2 with posterior head coil", "duration": null },
      { "name": "Feet first - Position 20cm above feet", "duration": null },
      { "name": "FastView", "duration": "00:32" },
      { "name": "vessel_scout", "duration": "02:18" },
      { "name": "angio_fl3d_cor_pre", "duration": "00:58" },
      { "name": "Prepare Injector", "duration": null },
      { "name": "care_bolus_cor", "duration": "01:30" },
      { "name": "angio_fl3d_cor_post", "duration": "00:58" },
      { "name": "angio_twist_cor_iso_feet_post", "duration": "02:03" }
    ],
    "additional_info": "Angio > Peripheral"
  },
  {
    "protocol_name": "Angio_Peripheral",
    "sequences": [
      { "name": "Feet first - Position 20cm / 7in above feet", "duration": null },
      { "name": "FastView", "duration": "00:32" },
      { "name": "localizer_aorta", "duration": "00:21", "info": "Generic Views" },
      { "name": "vessel_scout", "duration": "01:42", "info": "Generic Views" },
      { "name": "I_angio_fl3d_cor_feet_pre", "duration": "00:27", "info": "Generic Views" },
      { "name": "II_angio_fl3d_cor_legs_pre", "duration": "00:17", "info": "Generic Views" },
      { "name": "III_angio_fl3d_cor_abd_pre", "duration": "00:14", "info": "Generic Views" },
      { "name": "Care Bolus cor", "duration": "01:30" },
      { "name": "III_angio_fl3d_cor_abd_post", "duration": "00:14" },
      { "name": "II_angio_fl3d_cor_legs_post", "duration": "00:17" },
      { "name": "I_angio_fl3d_cor_feet_post", "duration": "00:27" }
    ],
    "additional_info": "Angio > Peripheral"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "Voice comands = Short Inhaled", "duration": null },
      { "name": "localizer", "duration": "00:24" },
      { "name": "t2_trufi_tra_bh", "duration": "00:15" },
      { "name": "angio_fl3d_cor_pre", "duration": "00:16" },
      { "name": "Prepare Injector", "duration": null },
      { "name": "care_bolus_cor", "duration": "01:30" },
      { "name": "angio_fl3d_cor_post", "duration": "00:16" }
    ],
    "additional_info": "Angio > Renal MRA"
  },
  {
    "protocol_name": "TWIST",
    "sequences": [
      { "name": "Contrast", "duration": null },
      { "name": "Inject after 1st measurement", "duration": null },
      { "name": "angio_twist_cor_iso", "duration": "02:27" }
    ],
    "additional_info": "Angio > Thoracic Aorta"
  },
  {
    "protocol_name": "Care Bolus",
    "sequences": [
      { "name": "___ Voice comands = Short Inhaled ___", "duration": null },
      { "name": "localizer", "duration": "00:24" },
      { "name": "t2_trufi_tra_bh", "duration": "00:15" },
      { "name": "angio_fl3d_cor_pre", "duration": "00:16" },
      { "name": "Prepare Injector", "duration": null },
      { "name": "care_bolus_cor", "duration": "01:30" },
      { "name": "angio_fl3d_cor_post", "duration": "00:16" }
    ],
    "additional_info": "Angio > Thoracic Aorta"
  },
  {
    "protocol_name": "MRA options",
    "sequences": [
      { "name": "tof_cs_acc7.2", "duration": "03:25" },
      { "name": "TOF with large z-coverage", "duration": null },
      { "name": "tof_fl3d_tra_large", "duration": "05:27" },
      { "name": "Contrast", "duration": null },
      { "name": "angio_twist_sag_iso", "duration": "01:59" }
    ],
    "additional_info": "Angio > Brain"
  },
  {
    "protocol_name": "MRV",
    "sequences": [
      { "name": "tof_fl2d_sag_obl_MRV", "duration": "02:52" }
    ],
    "additional_info": "Angio > Brain"
  },
  {
    "protocol_name": "Routine",
    "sequences": [
      { "name": "please position on chin", "duration": null },
      { "name": "localizer", "duration": null },
      { "name": "headneck_localizer", "duration": "00:09" },
      { "name": "tho_localizer", "duration": "00:18" },
      { "name": "abd_localizer", "duration": "00:18" },
      { "name": "pelv_localizer", "duration": "00:09" },
      { "name": "uppleg_localizer", "duration": "00:09" },
      { "name": "lowleg_localizer", "duration": "00:09" },
      { "name": "feet_localizer", "duration": "00:09" },
      { "name": "headneck_t2_tse_stir_cor", "duration": "02:13" },
      { "name": "tho_t2_tse_stir_cor_trig", "duration": "02:10" },
      { "name": "abd_t2_tse_stir_cor_trig", "duration": "02:10" },
      { "name": "pelv_t2_tse_stir_cor", "duration": "02:38" },
      { "name": "ep2d_diff_stir_b50_800_tra_p2", "duration": "13:40" },
      { "name": "tse T1 or VIBE", "duration": null, "info": "Basic Decision" },
      { "name": "headneck_t1_vibe_dixon_cor_p4", "duration": "00:16", "info": "VIBE" },
      { "name": "headneck_t1_tse_cor", "duration": "01:56", "info": "TSE" },
      { "name": "thor_t1_vibe_dixon_cor_p4_insp", "duration": "00:16", "info": "VIBE" },
      { "name": "thor_t1_tse_cor", "duration": "01:56", "info": "TSE" },
      { "name": "abd_t1_vibe_dixon_cor_p4_insp", "duration": "00:16", "info": "VIBE" },
      { "name": "abdo_t1_tse_cor", "duration": "01:56", "info": "TSE" },
      { "name": "pelv_t1_vibe_dixon_cor_p4", "duration": "00:16", "info": "VIBE" },
      { "name": "pelv_t1_tse_cor", "duration": "01:56", "info": "TSE" }
    ],
    "additional_info": "Whole Body > Whole Body"
  },
  {
    "protocol_name": "Whole Body",
    "sequences": [
      { "name": "FastView", "duration": "00:39" },
      { "name": "t2_haste_cor_p3", "duration": "05:57" },
      { "name": "t2_haste_stir_cor_p3_trig_272", "duration": "04:57" },
      { "name": "headneck_t1_vibe_dixon_cor_p4", "duration": "01:36" }
    ],
    "additional_info": "Whole Body > Whole Body"
  },
  {
    "protocol_name": "Whole_Body_With Diffusion",
    "sequences": [
      { "name": "please position on chin", "duration": null },
      { "name": "localizer", "duration": null },
      { "name": "FastView", "duration": "00:38" },
      { "name": "ep2d_diff_stir_b50_800_tra_p2", "duration": "13:40" },
      { "name": "AAhead_scout_Head", "duration": "00:14", "info": "AutoAlign Scout" },
      { "name": "resolve_4scan_trace_tra_p2_s2", "duration": "00:01" },
      { "name": "t2_tse_dark-fluid_tra", "duration": "02:14" },
      { "name": "t2_tse_stir_tra", "duration": "01:26" },
      { "name": "t2_haste_tra_p2_384_mbh_Thorax", "duration": "01:23" },
      { "name": "t2_haste_tra_Abdomen", "duration": "01:28" },
      { "name": "t2_tse_stir_tra_bilat_Hip", "duration": "01:27" },
      { "name": "t2_tse_sag_p3_Female_Pelvis", "duration": "02:14" },
      { "name": "t2_tse_tra_p3_Prostate", "duration": "02:49" },
      { "name": "I_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "II_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "III_AAspine_scout", "duration": "00:19", "info": "Spine Scout" },
      { "name": "t2_tse_sag_Cervical", "duration": "01:14", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Dorsal", "duration": "01:14", "info": "Spine Positioning" },
      { "name": "t2_tse_sag_Lumbar", "duration": "01:29", "info": "Spine Positioning" },
      { "name": "t2_haste_cor_Head to Pelvis", "duration": "03:57" },
      { "name": "t2_haste_stir_cor_p3_Head to Pelvis", "duration": "02:24" },
      { "name": "t1_vibe_dixon_cor_Head to Pelvis", "duration": "00:48" },
      { "name": "___ Coil_Shift ___", "duration": null },
      { "name": "t2_haste_cor_Pelvis to Leg", "duration": "02:00" },
      { "name": "t2_haste_stir_cor_p3_Pelvis to Leg", "duration": "00:48" },
      { "name": "t1_vibe_dixon_cor_Pelvis to Leg", "duration": "00:16" }
    ],
    "additional_info": "Whole Body > Whole Body"
  },
  {
    "protocol_name": "IschemicHeartDisease",
    "sequences": [
      { "name": "localizer", "duration": "00:03" },
      { "name": "center on heart", "duration": null },
      { "name": "localizer_heart", "duration": "00:10", "info": "Table Positioning Strategy" },
      { "name": "thorax_cor", "duration": "00:17", "info": "Cardiac Basic" },
      { "name": "t2_haste_db_tra_bh", "duration": "00:42", "info": "Cardiac Basic" },
      { "name": "AAheart_scout", "duration": "00:09", "info": "Cardiac Basic" },
      { "name": "define_lax", "duration": "00:01", "info": "Cardiac Marker Localization" },
      { "name": "frequency_scout", "duration": "00:10", "info": "with Frequency Scout" },
      { "name": "cine_LAX", "duration": "00:05", "info": "Cardiac Standard" },
      { "name": "cine_LVOT", "duration": "00:08", "info": "Cardiac Standard" },
      { "name": "define_sax", "duration": "00:01", "info": "Cardiac SAX Planning" },
      { "name": "t1map_long_t1", "duration": "00:20", "info": "Cardiac Standard" },
      { "name": "t2map_flash", "duration": "00:14", "info": "Cardiac Standard" },
      { "name": "t2_tse_db_fs", "duration": "03:21" },
      { "name": "t2_stir", "duration": "00:51", "info": "Cardiac Standard" },
      { "name": "inject contrast agent", "duration": null, "info": "Cardiac Standard" },
      { "name": "dynamic", "duration": "00:40", "info": "Cardiac Standard" },
      { "name": "flow_150_tp_retro_fb_AORTA", "duration": "01:10", "info": "Cardiac Standard" },
      { "name": "t1_vibe_dixon_cor", "duration": "00:10", "info": "Cardiac Flow" },
      { "name": "cine_SAX", "duration": "00:06", "info": "Cardiac Standard" },
      { "name": "flow_tp_retro_bh_AORTA", "duration": "00:06", "info": "Cardiac Flow" },
      { "name": "flow_tp_retro_bh_MPA", "duration": "00:10", "info": "Cardiac Flow" },
      { "name": "ti-scout_cs", "duration": "00:04", "info": "Cardiac Standard" },
      { "name": "de_tfl_high-res_psir_SAX_fb", "duration": "03:35", "info": "Cardiac Standard" },
      { "name": "de_tfl_high-res_psir_4CH_fb", "duration": "03:35", "info": "Cardiac Standard" },
      { "name": "de_tfl_high-res_psir_2CH_fb", "duration": "03:35", "info": "Cardiac Standard" },
      { "name": "t1map_short_t1", "duration": "00:17", "info": "Cardiac Standard" },
      { "name": "angio_twist_cor_iso", "duration": "01:22", "info": "Cardiac Standard" },
      { "name": "cine_cs_2_shot_axial", "duration": "01:17", "info": "Cardiac Standard" },
      { "name": "cine_cs_2_shot_sax", "duration": "00:05", "info": "Cardiac Standard" },
      { "name": "de_seg_high-res_sax_fs", "duration": "00:09", "info": "Cardiac Standard" },
      { "name": "cine_trufi_cs_rt_LAX", "duration": "00:18", "info": "Cardiac Standard" },
      { "name": "cine_realtime_LVOT", "duration": "00:01", "info": "Cardiac Standard" },
      { "name": "cine_trufi_cs_rt_SAX", "duration": "00:18", "info": "Cardiac Standard" },
      { "name": "flow_150_tp_retro_fb_MPA", "duration": "01:18", "info": "Cardiac Flow" },
      { "name": "t1_vibe_dixon_tra_upper_abd", "duration": "00:10", "info": "Cardiac Standard" },
      { "name": "t1_vibe_dixon_cor_delayed_p4_bh_AFTER 1HOI", "duration": "00:10", "info": "Cardiac Standard" },
      { "name": "t1_starvibe_fs_tra_iso", "duration": "03:12" },
      { "name": "cine CS 2 shot 3slices", "duration": "01:04" }
    ],
    "additional_info": "Heart > Cardiac"
  },
  {
    "protocol_name": "Cardiac",
    "sequences": [
      { "name": "localizer trufi multisilce", "duration": "00:04" },
      { "name": "center on heart", "duration": null },
      { "name": "localizer trufi heart", "duration": "00:13", "info": "Table Positioning Strategy" },
      { "name": "___ Adjust_Shim ___", "duration": null },
      { "name": "t2_trufi single-shot 15sl", "duration": "00:11" },
      { "name": "t2_haste_db_tra", "duration": "00:26" },
      { "name": "localizer trufi 2-chamber", "duration": "00:01" },
      { "name": "localizer trufi 4-chamber", "duration": "00:01" },
      { "name": "localizer trufi short axis", "duration": "00:06" },
      { "name": "2 ch cine trufi retro reduced fov", "duration": "00:29" },
      { "name": "4 ch cine trufi retro reduced fov", "duration": "00:29" },
      { "name": "SA ch cine trufi retro reduced fov", "duration": "01:26" },
      { "name": "___ Morphology ___", "duration": null },
      { "name": "t2_stir_db_sax_p3_DRG_DRS", "duration": "00:05" },
      { "name": "t1_tse_db_high-res_p3_DRG_DRS", "duration": "00:08" },
      { "name": "t2_tse_db_high-res_p3_DRG_DRS", "duration": "00:06" },
      { "name": "___ Perfusion ___", "duration": null },
      { "name": "dynamic tfl sr epat", "duration": "00:32" },
      { "name": "ti-scout", "duration": "00:08" },
      { "name": "___ 2D single-shot ___", "duration": null },
      { "name": "SA de trufi overview 10sl psir", "duration": "00:15" },
      { "name": "2ch de trufi overview 10sl psir", "duration": "00:15" },
      { "name": "4ch de trufi overview 10sl psir", "duration": "00:15" },
      { "name": "___ Free_BH ___", "duration": null },
      { "name": "2ch de trufi high-res psir fb", "duration": "00:20" },
      { "name": "4ch de trufi high-res psir fb", "duration": "00:20" },
      { "name": "SA de trufi overview 8sl psir fb", "duration": "01:34" }
    ],
    "additional_info": "Heart > Cardiac"
  },
  {
    "protocol_name": "Flow study cine",
    "sequences": [
      { "name": "LVOT cine trufi retro reduced fov", "duration": "00:59" },
      { "name": "RVOT cine trufi retro reduced fov", "duration": "00:59" },
      { "name": "PUL cine trufi retro reduced fov", "duration": "00:59" },
      { "name": "AV cine trufi retro reduced fov", "duration": "00:59" }
    ],
    "additional_info": "Heart > Cardiac"
  },
  {
    "protocol_name": "Myo Maps",
    "sequences": [
      { "name": "___ RR interval > 700 ms ___", "duration": null },
      { "name": "t1map long t1", "duration": "00:08" },
      { "name": "t1map short t1", "duration": "00:08" },
      { "name": "___ RR interval < 700 ms ___", "duration": null },
      { "name": "t1map long t1", "duration": "00:08" },
      { "name": "t1map short t1", "duration": "00:08" },
      { "name": "___ T2_Map ___", "duration": null },
      { "name": "t2map flash", "duration": "00:07" },
      { "name": "___ T2 Star ___", "duration": null },
      { "name": "t2map Star", "duration": "00:05" }
    ],
    "additional_info": "Heart > Cardiac"
  },
  {
    "protocol_name": "Flow",
    "sequences": [
      { "name": "flow venc-scout 100-190tp bh", "duration": "00:06" },
      { "name": "flow 150 tp retro bh", "duration": "00:11" },
      { "name": "___ Free_Breathing ___", "duration": null },
      { "name": "flow_150_tp_retro_fb", "duration": "02:07" }
    ],
    "additional_info": "Heart > Cardiac"
  },
  {
    "protocol_name": "Frequency Scout",
    "sequences": [
      { "name": "trufi freq scout", "duration": "00:10" }
    ],
    "additional_info": "Heart > Cardiac"
  }
];