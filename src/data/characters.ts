export type Character = {
    id: string;
    name: string;
    games: ('undertale' | 'deltarune' | string)[]; // permite más juegos si añades carpetas nuevas
    zones: string[];
    sprites: string[];
};

export const characters: Character[] = [
  {
    "id": "aaron",
    "name": "Aaron",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/aaron/spr_aaronbody_0.png",
      "/sprites/Undertale/waterfall/aaron/spr_aaronbody_bull_0.png",
      "/sprites/Undertale/waterfall/aaron/spr_aaronnpc_0.png",
      "/sprites/Undertale/waterfall/aaron/spr_aaronnpc_1.png",
      "/sprites/Undertale/waterfall/aaron/spr_npc_aaron_0.png"
    ]
  },
  {
    "id": "addison",
    "name": "Addison",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/addison/spr_npc_addison_blue_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_blue_1.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_blue_up_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_blue_up_1.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_orange_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_orange_1.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_orange_up_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_orange_up_1.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_pink_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_pink_1.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_pink_up_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_pink_up_1.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_yellow_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_yellow_1.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_yellow_up_0.png",
      "/sprites/deltarune/ch2/addison/spr_npc_addison_yellow_up_1.png"
    ]
  },
  {
    "id": "advertisement",
    "name": "Advertisement",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/advertisement/spr_ds_advertisement_0.png",
      "/sprites/Undertale/waterfall/advertisement/spr_ds_advertisement_1.png",
      "/sprites/Undertale/waterfall/advertisement/spr_ds_advertisement_2.png",
      "/sprites/Undertale/waterfall/advertisement/spr_ds_advertisement_3.png"
    ]
  },
  {
    "id": "alphys",
    "name": "Alphys",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/alphys/spr_adate_head_10.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_11.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_12.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_14.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_15.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_16.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_17.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_18.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_7.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_8.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_head_9.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_smooch_0.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_smooch_1.png",
      "/sprites/Undertale/hotland/alphys/spr_adate_smooch_s_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_d_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_d_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_d_dark_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_dt_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_freaked_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_gameboy_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_l_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_l_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_l_sad2_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_lt_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_r_sad_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_r_sad2_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_shock_fall_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_turnred_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphys_turnred_16.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysd_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysd_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_0_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_1_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_10_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_11_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_12_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_13_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_14_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_15_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_16_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_17_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_18_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_19_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_2_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_20_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_21_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_22_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_23_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_24_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_25_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_3_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_4_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_5_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_6_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_7_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_8_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_9_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_hit_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_laugh_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_new_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_new_2.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_new_3.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_new_4.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_new_5.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysface_smarmy_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_a_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_a_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_b_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_b_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_c_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_c_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_d_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_d_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_lookup_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_tooexcited_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphyshelper_tooexcited_1.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysl_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysr_0.png",
      "/sprites/Undertale/hotland/alphys/spr_alphysr_shock_0.png",
      "/sprites/Undertale/hotland/alphys/spr_ua_hold_1.png",
      "/sprites/Undertale/hotland/alphys/spr_ua_lift1_0.png",
      "/sprites/Undertale/hotland/alphys/spr_ua_lift2_0.png",
      "/sprites/Undertale/hotland/alphys/spr_ua_pet_0.png",
      "/sprites/Undertale/hotland/alphys/spr_ua_pet_1.png",
      "/sprites/Undertale/hotland/alphys/sprite1099_0.png"
    ]
  },
  {
    "id": "alvin",
    "name": "Alvin",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/alvin/spr_npc_alvin_0.png"
    ]
  },
  {
    "id": "asgore",
    "name": "Asgore",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/asgore/spr_asgore_d_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_d_shock_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_dt_1.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_dt_sad_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_dt_sad_1.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_face0_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_face0_1.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_face0_blink_1.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_face0_blink_2.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_face1_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_face2_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_face4_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_11.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_12.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_14.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_15.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_16.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_3.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_4.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_5.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_hug_7.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_l_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_lt_1.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_shears_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_shears_sad_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_shockface_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_wrapface_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgore_wrapface_2.png",
      "/sprites/Undertale/newhome/asgore/spr_asgoreb_head1_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgored_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgorel_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgorel_2.png",
      "/sprites/Undertale/newhome/asgore/spr_asgorer_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgorer_2.png",
      "/sprites/Undertale/newhome/asgore/spr_asgorer_3.png",
      "/sprites/Undertale/newhome/asgore/spr_asgoreu_notpiss_0.png",
      "/sprites/Undertale/newhome/asgore/spr_asgoreu_notpiss_1.png",
      "/sprites/Undertale/newhome/asgore/spr_face_asgore0_0.png",
      "/sprites/Undertale/newhome/asgore/spr_face_asgore2_0.png",
      "/sprites/Undertale/newhome/asgore/spr_face_asgore3_0.png",
      "/sprites/Undertale/newhome/asgore/spr_face_asgore4_0.png",
      "/sprites/Undertale/newhome/asgore/spr_face_asgore5_0.png",
      "/sprites/Undertale/newhome/asgore/spr_face_asgore6_0.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_0.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_1.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_10.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_2.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_3.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_4.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_5.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_6.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_7.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_8.png",
      "/sprites/Undertale/newhome/asgore/spr_sadgore_face_9.png"
    ]
  },
  {
    "id": "asriel",
    "name": "Asriel",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_0.png",
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_1.png",
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_2.png",
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_3.png",
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_5.png",
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_6.png",
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_7.png",
      "/sprites/Undertale/newhome/asriel/spr_afinal_face_cry2_0.png",
      "/sprites/Undertale/newhome/asriel/spr_asriel_afterimager_0.png",
      "/sprites/Undertale/newhome/asriel/spr_asriel_afterimager_full_0.png",
      "/sprites/Undertale/newhome/asriel/spr_asriel_headshake_0.png",
      "/sprites/Undertale/newhome/asriel/spr_asriel_headshake_1.png",
      "/sprites/Undertale/newhome/asriel/spr_asriel_headshake_sassy_0.png",
      "/sprites/Undertale/newhome/asriel/spr_asrielhead_3.png"
    ]
  },
  {
    "id": "astigmatism",
    "name": "Astigmatism",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/astigmatism/spr_astigmatism_anim2_0.png",
      "/sprites/Undertale/core/astigmatism/spr_astigmatism_anim2_11.png",
      "/sprites/Undertale/core/astigmatism/spr_astigmatism_anim2_3.png",
      "/sprites/Undertale/core/astigmatism/spr_astigmatism_anim2_4.png",
      "/sprites/Undertale/core/astigmatism/spr_astigmatism_anim2_5.png",
      "/sprites/Undertale/core/astigmatism/spr_astigmatism_anim2_6.png",
      "/sprites/Undertale/core/astigmatism/spr_astigmatism_anim2_8.png"
    ]
  },
  {
    "id": "ballperson",
    "name": "Ballperson",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/ballperson/spr_ballperson_1.png"
    ]
  },
  {
    "id": "battlequeen",
    "name": "Battlequeen",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_11.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_12.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_14.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_15.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_17.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_2.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_21.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_22.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_26.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_27.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_29.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_8.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_9.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_missles_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_bqueen_missles_2.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_26_queen_giga_head_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_26_queen_giga_head_laugh_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_26_queen_giga_head_laugh_1.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_26_queen_giga_head_unhappy_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_27_queen_damaged_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_27_queen_damaged_unhappy_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_27_queen_giga_surprise_0.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_27_queen_laugh_damaged_1.png",
      "/sprites/deltarune/ch2/battlequeen/spr_cutscene_27_queen_look_down_damaged_opaque_0.png"
    ]
  },
  {
    "id": "berdly",
    "name": "Berdly",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/berdly/spr_berdly_book_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_coaster_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_cross_arms_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_cross_arms_nervous_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_cross_arms_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_cross_arms_smug_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_defeat_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_depressed_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_depressed_dw_left_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_depressed_dw_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_dt_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_dt_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_hurt_kneel_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_hurt_kneel_battle_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_hurt_kneel_burnt_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_ice_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_jump_pose_1_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_jump_pose_2_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_kneel_scream_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_laugh_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_laugh_dw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_library_r_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_mad_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_mad_right_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_shocked_left_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_shocked_left_battle_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_shocked_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_smug_point_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_smug_point_animated_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_smug_point_animated_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_smug_point_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_ut_l_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_unhappy_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_unhappy_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_unhappy_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_dw_unhappy_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_lw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_lw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_lw_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_down_lw_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_shocked_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_shocked_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_shocked_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_shocked_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_burned_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_burned_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_burned_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_dw_unhappy_burned_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_books_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_books_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_books_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_left_lw_books_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_unhappy_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_unhappy_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_unhappy_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_dw_unhappy_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_brokenArm_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_brokenArm_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_brokenArm_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_right_lw_brokenArm_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_up_dw_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_up_dw_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_up_dw_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_up_lw_books_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_up_lw_books_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_up_lw_books_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_walk_up_lw_books_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdlyact_queen_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdlyb_idle_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdlyb_idle_right_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdlyb_idle_right_2.png",
      "/sprites/deltarune/ch1/berdly/spr_berdlyb_idle_right_3.png",
      "/sprites/deltarune/ch1/berdly/spr_berdlyb_idle_right_4.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_23d_berdly_rose_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_23d_berdly_rose_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_23d_noelle_berdly_shake_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_23d_noelle_berdly_shake_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_23d_noelle_berdly_shake_2.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_gamer_kiss_2_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_gamer_kiss_2_surprise_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_gamer_kiss_3_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_gamer_kiss_3_surprise_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_grab_electrocute_bluearm_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_grab_electrocute_bluearm_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_grab_electrocute_bluearm_2.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_grab_electrocute_yellowarm_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_grab_electrocute_yellowarm_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_grab_electrocute_yellowarm_2.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_grab_plug_old_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_ground_2_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_ground_3_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_ground_surprised_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_ground_surprised_2_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_kneel_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_kneel_left_unhappy_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_25_berdly_plug_removed_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_26_berdly_left_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_26_berdly_statue_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_angry_left_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_angry_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_depressed_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_halt_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_halt_look_forward_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_halt_look_left_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_halt_look_up_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_halt_normal_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_halt_talk_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_laugh_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_laugh_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_shocked_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_smug_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_down_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_down_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_down_2.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_down_3.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_2.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_3.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_unhappy_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_unhappy_1.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_unhappy_2.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_27_berdly_walk_right_unhappy_3.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_28b_berdly_desk_books_lift_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_28b_berdly_desk_down_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_28b_berdly_desk_holds_arm_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_28b_berdly_desk_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_28b_berdly_desk_shocked_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_28b_berdly_desk_sleep_0.png",
      "/sprites/deltarune/ch1/berdly/spr_cutscene_28b_berdly_desk_wakes_right_0.png",
      "/sprites/deltarune/ch1/berdly/spr_face_b0_0.png",
      "/sprites/deltarune/ch1/berdly/spr_face_b1_0.png",
      "/sprites/deltarune/ch1/berdly/spr_face_b2_0.png",
      "/sprites/deltarune/ch1/berdly/spr_face_b3_0.png",
      "/sprites/deltarune/ch1/berdly/spr_face_b4_0.png",
      "/sprites/deltarune/ch1/berdly/spr_face_b5_0.png"
    ]
  },
  {
    "id": "big_tem",
    "name": "Big Tem",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/big_tem/spr_5_tembody_0.png",
      "/sprites/Undertale/waterfall/big_tem/spr_5_temexampl_0.png",
      "/sprites/Undertale/waterfall/big_tem/spr_temsmug_0.png"
    ]
  },
  {
    "id": "bigmouth",
    "name": "Bigmouth",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/bigmouth/spr_bigmouth_0.png",
      "/sprites/Undertale/snowdin/bigmouth/spr_bigmouth_1.png"
    ]
  },
  {
    "id": "blockguy",
    "name": "Blockguy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/blockguy/spr_blockguy_overworld_0.png",
      "/sprites/deltarune/ch1/blockguy/spr_blockguy_part_6.png",
      "/sprites/deltarune/ch1/blockguy/spr_blockguy_part_hurt_1.png",
      "/sprites/deltarune/ch1/blockguy/spr_blockguy_spared_0.png"
    ]
  },
  {
    "id": "blockler",
    "name": "Blockler",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/blockler/spr_blockler_b_0.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_b_1.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_b_2.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_b_3.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_b_4.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_b_5.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_o_0.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_o_1.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_o_2.png",
      "/sprites/deltarune/ch1/blockler/spr_blockler_o_3.png"
    ]
  },
  {
    "id": "blocktree",
    "name": "Blocktree",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/blocktree/spr_blocktree_switch_0.png",
      "/sprites/deltarune/ch1/blocktree/spr_blocktree_switch_1.png",
      "/sprites/deltarune/ch1/blocktree/spr_blocktree_switch_2.png"
    ]
  },
  {
    "id": "bpants",
    "name": "Bpants",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/bpants/spr_bpants_face_0.png",
      "/sprites/Undertale/core/bpants/spr_bpants_face_1.png",
      "/sprites/Undertale/core/bpants/spr_bpants_face_2.png",
      "/sprites/Undertale/core/bpants/spr_bpants_face_3.png",
      "/sprites/Undertale/core/bpants/spr_bpants_face_4.png",
      "/sprites/Undertale/core/bpants/spr_bpants_face_5.png",
      "/sprites/Undertale/core/bpants/spr_bpants_face_6.png",
      "/sprites/Undertale/core/bpants/spr_burgerpants_sit_0.png",
      "/sprites/Undertale/core/bpants/spr_burgerpants_sit_phone_0.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_0.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_1.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_2.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_3.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_4.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_5.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_6.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_7.png",
      "/sprites/Undertale/core/bpants/spr_face_burgerpants_8.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot_takeoff_0.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot_takeoff_10.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot_takeoff_11.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot_takeoff_12.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot_takeoff_2.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot_takeoff_3.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot_takeoff_9.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot1_0.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot1_1.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot1_2.png",
      "/sprites/Undertale/core/bpants/spr_npc_icemascot2_0.png"
    ]
  },
  {
    "id": "bratty",
    "name": "Bratty",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/bratty/spr_brattybody_0.png",
      "/sprites/Undertale/core/bratty/spr_brattybody_1.png",
      "/sprites/Undertale/core/bratty/spr_brattyface_0.png",
      "/sprites/Undertale/core/bratty/spr_brattyface_1.png",
      "/sprites/Undertale/core/bratty/spr_brattyface_2.png",
      "/sprites/Undertale/core/bratty/spr_brattyface_3.png",
      "/sprites/Undertale/core/bratty/spr_brattyface_4.png",
      "/sprites/Undertale/core/bratty/spr_face_bratty_0.png",
      "/sprites/Undertale/core/bratty/spr_face_bratty_1.png",
      "/sprites/Undertale/core/bratty/spr_face_bratty_2.png",
      "/sprites/Undertale/core/bratty/spr_face_bratty_3.png",
      "/sprites/Undertale/core/bratty/spr_face_bratty_4.png",
      "/sprites/Undertale/core/bratty/spr_face_bratty_5.png",
      "/sprites/Undertale/core/bratty/spr_face_bratty_6.png",
      "/sprites/Undertale/core/bratty/spr_npc_bratty_0.png",
      "/sprites/Undertale/core/bratty/spr_npc_bratty_1.png"
    ]
  },
  {
    "id": "businessguy",
    "name": "Businessguy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/businessguy/spr_npc_businessguy_0.png",
      "/sprites/deltarune/ch1/businessguy/spr_npc_businessguy_1.png"
    ]
  },
  {
    "id": "businessguys",
    "name": "Businessguys",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/businessguys/spr_businessman_1.png",
      "/sprites/Undertale/hotland/businessguys/spr_businessman_2.png"
    ]
  },
  {
    "id": "businessmanticore",
    "name": "Businessmanticore",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/businessmanticore/spr_businessmanticore_1.png"
    ]
  },
  {
    "id": "car",
    "name": "Car",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/car/spr_caradventure_car_enemy_0.png",
      "/sprites/deltarune/ch2/car/spr_caradventure_car_enemy_1.png",
      "/sprites/deltarune/ch2/car/spr_caradventure_car_enemy_2.png",
      "/sprites/deltarune/ch2/car/spr_caradventure_car_enemy_3.png"
    ]
  },
  {
    "id": "catty",
    "name": "Catty",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/catty/spr_catti_ut_0.png",
      "/sprites/Undertale/core/catty/spr_catti_ut_1.png",
      "/sprites/Undertale/core/catty/spr_cattybody_0.png",
      "/sprites/Undertale/core/catty/spr_cattybody_1.png",
      "/sprites/Undertale/core/catty/spr_cattyface_0.png",
      "/sprites/Undertale/core/catty/spr_cattyface_1.png",
      "/sprites/Undertale/core/catty/spr_cattyface_2.png",
      "/sprites/Undertale/core/catty/spr_cattyface_3.png",
      "/sprites/Undertale/core/catty/spr_cattyface_4.png",
      "/sprites/Undertale/core/catty/spr_face_catty_0.png",
      "/sprites/Undertale/core/catty/spr_face_catty_1.png",
      "/sprites/Undertale/core/catty/spr_face_catty_2.png",
      "/sprites/Undertale/core/catty/spr_face_catty_3.png",
      "/sprites/Undertale/core/catty/spr_face_catty_4.png",
      "/sprites/Undertale/core/catty/spr_face_catty_5.png",
      "/sprites/Undertale/core/catty/spr_face_catty_6.png",
      "/sprites/Undertale/core/catty/spr_face_catty_7.png",
      "/sprites/Undertale/core/catty/spr_face_catty_8.png",
      "/sprites/Undertale/core/catty/spr_npc_catty_ukelele_0.png",
      "/sprites/Undertale/core/catty/spr_npc_catty_ukelele_1.png"
    ]
  },
  {
    "id": "cattydad",
    "name": "Cattydad",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/cattydad/spr_npc_cattydad_0.png",
      "/sprites/deltarune/ch1/cattydad/spr_npc_cattydad_1.png",
      "/sprites/deltarune/ch1/cattydad/spr_npc_cattydad_wave_0.png",
      "/sprites/deltarune/ch1/cattydad/spr_npc_cattydad_wave_1.png"
    ]
  },
  {
    "id": "cattymom",
    "name": "Cattymom",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/cattymom/spr_npc_catti_mom_no1_0.png",
      "/sprites/deltarune/ch1/cattymom/spr_npc_catti_mom_no1_1.png",
      "/sprites/deltarune/ch1/cattymom/spr_npc_catty_0.png",
      "/sprites/deltarune/ch1/cattymom/spr_npc_catty_1.png",
      "/sprites/deltarune/ch1/cattymom/spr_npc_catty_wave_0.png",
      "/sprites/deltarune/ch1/cattymom/spr_npc_catty_wave_1.png"
    ]
  },
  {
    "id": "cattysister",
    "name": "Cattysister",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/cattysister/spr_face_c0_0.png",
      "/sprites/deltarune/ch1/cattysister/spr_face_c1_0.png",
      "/sprites/deltarune/ch1/cattysister/spr_face_c2_0.png",
      "/sprites/deltarune/ch1/cattysister/spr_npc_cattiwaitress_0.png"
    ]
  },
  {
    "id": "chara",
    "name": "Chara",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/chara/spr_charad_0.png",
      "/sprites/Undertale/newhome/chara/spr_charal_0.png",
      "/sprites/Undertale/newhome/chara/spr_charar_0.png",
      "/sprites/Undertale/newhome/chara/spr_truechara_0.png",
      "/sprites/Undertale/newhome/chara/spr_truechara_laugh_0.png",
      "/sprites/Undertale/newhome/chara/spr_truechara_laugh_1.png",
      "/sprites/Undertale/newhome/chara/spr_truechara_laugh_2.png",
      "/sprites/Undertale/newhome/chara/spr_truechara_weird_0.png"
    ]
  },
  {
    "id": "charles",
    "name": "Charles",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/charles/spr_npc_charles_0.png",
      "/sprites/Undertale/core/charles/spr_npc_charles_1.png",
      "/sprites/Undertale/core/charles/spr_npc_most_improved_1997_0.png",
      "/sprites/Undertale/core/charles/spr_npc_most_improved_1997_1.png"
    ]
  },
  {
    "id": "checkers",
    "name": "Checkers",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/checkers/spr_checkers_bow_0.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_bow_1.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_crouch_0.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_idle_crownless_0.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_leap_0.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_leap_1.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_leap_2.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_leg_5.png",
      "/sprites/deltarune/ch1/checkers/spr_checkers_magnificent_4.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_front_0.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_hurt_0.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_idle_0.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_idle_3.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_run_0.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_run_1.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_run_2.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_run_3.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_transform_1.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_transform2_5.png",
      "/sprites/deltarune/ch1/checkers/spr_smallchecker_transform3_0.png"
    ]
  },
  {
    "id": "chilldrake",
    "name": "Chilldrake",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/chilldrake/spr_chilldrake_0.png",
      "/sprites/Undertale/snowdin/chilldrake/spr_chilldrakenpc_0.png",
      "/sprites/Undertale/snowdin/chilldrake/spr_chilldrakenpc_1.png"
    ]
  },
  {
    "id": "clamgirl",
    "name": "Clamgirl",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/clamgirl/spr_clamgirl_a_0.png",
      "/sprites/Undertale/waterfall/clamgirl/spr_clamgirl_b_0.png",
      "/sprites/Undertale/waterfall/clamgirl/spr_clamgirl_b_1.png"
    ]
  },
  {
    "id": "clamguy",
    "name": "Clamguy",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/clamguy/spr_clamguy_a_0.png",
      "/sprites/Undertale/hotland/clamguy/spr_clamguy_b_0.png"
    ]
  },
  {
    "id": "clover",
    "name": "Clover",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/clover/spr_cloverhole_1.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_2.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_3.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_4.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_5.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_6.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_7.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_8.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_happy_2.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_happy_3.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_mad_3.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_shy_3.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_shy_4.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_shy_5.png",
      "/sprites/deltarune/ch1/clover/spr_cloverhole_shy_6.png"
    ]
  },
  {
    "id": "clubs",
    "name": "Clubs",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/clubs/spr_clubs_hurt_0.png",
      "/sprites/deltarune/ch1/clubs/spr_clubs_idle_0.png",
      "/sprites/deltarune/ch1/clubs/spr_clubs_spared_0.png"
    ]
  },
  {
    "id": "coffin",
    "name": "Coffin",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/coffin/spr_coffin_closed_0.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_closed_1.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_closed_2.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_closed_3.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_closed_4.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_closed_5.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_closed_6.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_open_1.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_open_2.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_open_3.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_open_4.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_open_5.png",
      "/sprites/Undertale/newhome/coffin/spr_coffin_open_6.png"
    ]
  },
  {
    "id": "coody",
    "name": "Coody",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/coody/spr_npc_coody_0.png"
    ]
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/cursor/spr_cutscene_26_hacker_0.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_left_0.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_left_1.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_left_2.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_left_3.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_right_0.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_right_1.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_right_2.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_cursor_walk_right_3.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_hacker_0.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_hacker_point_0.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_left_0.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_left_1.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_left_2.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_left_3.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_right_0.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_right_1.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_right_2.png",
      "/sprites/deltarune/ch2/cursor/spr_npc_pointer_walk_right_3.png"
    ]
  },
  {
    "id": "diamondboy",
    "name": "Diamondboy",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/diamondboy/spr_diamondboy_0.png"
    ]
  },
  {
    "id": "diamondguy",
    "name": "Diamondguy",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/diamondguy/spr_diamond_recep_0.png",
      "/sprites/Undertale/core/diamondguy/spr_diamond_recep_1.png"
    ]
  },
  {
    "id": "diamondtallboy",
    "name": "Diamondtallboy",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/diamondtallboy/spr_diamondtallboy_0.png"
    ]
  },
  {
    "id": "diamondtrash",
    "name": "Diamondtrash",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/diamondtrash/spr_diamond_trash_0.png",
      "/sprites/deltarune/ch1/diamondtrash/spr_diamond_trash_1.png"
    ]
  },
  {
    "id": "dogamy",
    "name": "Dogamy",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/dogamy/spr_mandoge_1.png",
      "/sprites/Undertale/snowdin/dogamy/spr_mandogwalk_0.png",
      "/sprites/Undertale/snowdin/dogamy/spr_mandogwalk_1.png",
      "/sprites/Undertale/snowdin/dogamy/spr_mandogwalk_2.png",
      "/sprites/Undertale/snowdin/dogamy/spr_mandogwalk_3.png",
      "/sprites/Undertale/snowdin/dogamy/spr_npc_prisoner_dog_m_0.png",
      "/sprites/Undertale/snowdin/dogamy/spr_npc_prisoner_dog_m_1.png",
      "/sprites/Undertale/snowdin/dogamy/spr_npc_prisoner_dog_m_2.png",
      "/sprites/Undertale/snowdin/dogamy/spr_npc_prisoner_dog_m_3.png"
    ]
  },
  {
    "id": "dogaressa",
    "name": "Dogaressa",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/dogaressa/spr_npc_prisoner_dog_f_0.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_npc_prisoner_dog_f_1.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_npc_prisoner_dog_f_2.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_npc_prisoner_dog_f_3.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_womandognormal_0.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_womandogwalk_0.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_womandogwalk_1.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_womandogwalk_2.png",
      "/sprites/Undertale/snowdin/dogaressa/spr_womandogwalk_3.png"
    ]
  },
  {
    "id": "doggo",
    "name": "Doggo",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/doggo/spr_movedoge_o_0.png",
      "/sprites/Undertale/snowdin/doggo/spr_movedoge_o_1.png",
      "/sprites/Undertale/snowdin/doggo/spr_movedogeheada_0.png",
      "/sprites/Undertale/snowdin/doggo/spr_movedogeheada_11.png",
      "/sprites/Undertale/snowdin/doggo/spr_movedogeheada_3.png",
      "/sprites/Undertale/snowdin/doggo/spr_movedogeheada_4.png",
      "/sprites/Undertale/snowdin/doggo/spr_movedogeheada_5.png",
      "/sprites/Undertale/snowdin/doggo/spr_movedogeheadb_0.png",
      "/sprites/Undertale/snowdin/doggo/spr_npc_prisoner_dog_eye_0.png",
      "/sprites/Undertale/snowdin/doggo/spr_npc_prisoner_dog_eye_1.png",
      "/sprites/Undertale/snowdin/doggo/spr_npc_prisoner_dog_eye_2.png",
      "/sprites/Undertale/snowdin/doggo/spr_npc_prisoner_dog_eye_3.png"
    ]
  },
  {
    "id": "donutboy",
    "name": "Donutboy",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/donutboy/spr_donutscaredguy_0.png",
      "/sprites/Undertale/hotland/donutboy/spr_npc_donutcar_0.png",
      "/sprites/Undertale/hotland/donutboy/spr_npc_donutcar_1.png"
    ]
  },
  {
    "id": "dresslion",
    "name": "Dresslion",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/dresslion/spr_dresslion_a_0.png",
      "/sprites/Undertale/hotland/dresslion/spr_dresslion_b_0.png",
      "/sprites/Undertale/hotland/dresslion/spr_npc_dresslion_0.png",
      "/sprites/Undertale/hotland/dresslion/spr_npc_dresslion_1.png"
    ]
  },
  {
    "id": "drunkbun",
    "name": "Drunkbun",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/drunkbun/spr_npc_buncrazy_0.png",
      "/sprites/Undertale/snowdin/drunkbun/spr_npc_buncrazy_1.png"
    ]
  },
  {
    "id": "dummy",
    "name": "Dummy",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/dummy/spr_dummybattle_0.png",
      "/sprites/Undertale/ruinas/dummy/spr_dummybattle_glad_0.png",
      "/sprites/Undertale/ruinas/dummy/spr_dummybattle_glad_1.png"
    ]
  },
  {
    "id": "echoflowerex",
    "name": "Echoflowerex",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/echoflowerex/spr_fishnpc_echo_0.png",
      "/sprites/Undertale/waterfall/echoflowerex/spr_fishnpc_echo_1.png"
    ]
  },
  {
    "id": "editor1",
    "name": "Editor1",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/editor1/spr_npc_scarflady_0.png",
      "/sprites/Undertale/snowdin/editor1/spr_npc_scarflady_1.png"
    ]
  },
  {
    "id": "editor2",
    "name": "Editor2",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/editor2/spr_npc_ladygarf_0.png",
      "/sprites/Undertale/snowdin/editor2/spr_npc_ladygarf_1.png"
    ]
  },
  {
    "id": "elderpuzzler",
    "name": "Elderpuzzler",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/elderpuzzler/spr_puzzlehater_0.png",
      "/sprites/Undertale/waterfall/elderpuzzler/spr_puzzlehater_1.png"
    ]
  },
  {
    "id": "elnina",
    "name": "Elnina",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch3"
    ],
    "sprites": [
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_cry_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_cute_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_eyesclosed_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_glasses_left_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_glasses_left_blush_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_glasses_mad_left_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_glasses_sad_left_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_gloat_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_idle_left_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_idle_right_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_sad_left_0.png",
      "/sprites/deltarune/ch3/elnina/spr_board_elnina_sad_pose_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_angry_left_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_angrypose_left_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_angrypose_right_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_angrypose_right_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_cool_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_cool_3.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_eyesclosed_right_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_gloat_right_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_gloat_right_nowand_1.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_hurt_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_idle_right_alt_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_idle_right_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_sadconfused_right_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_shame_left_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_shocked_left_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_smileembarassed_left_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_elnina_smileembarassed_right_nowand_0.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_blush_right_1.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_cry_0.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_sneeze_0.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_sneeze_1.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_sunglasses_remove_0.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_sunglasses_remove_1.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_sunglasses_remove_4.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_sunglasses_remove_talk_1.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_talk_0.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_elnina_talk_1.png",
      "/sprites/deltarune/ch3/elnina/spr_npc_rouxls_weather_gaming_chef_0.png",
      "/sprites/deltarune/ch3/elnina/spr_rouxls_hugfriends_0.png",
      "/sprites/deltarune/ch3/elnina/spr_rouxls_hugfriends_5.png"
    ]
  },
  {
    "id": "endogeny",
    "name": "Endogeny",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/endogeny/spr_amalgam_dogball_0.png",
      "/sprites/Undertale/truelab/endogeny/spr_amalgam_dogball_5.png",
      "/sprites/Undertale/truelab/endogeny/spr_amalgam_dognpc_0.png",
      "/sprites/Undertale/truelab/endogeny/spr_endogeny_0.png",
      "/sprites/Undertale/truelab/endogeny/spr_endogeny_2_0.png"
    ]
  },
  {
    "id": "eram",
    "name": "Eram",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch3"
    ],
    "sprites": [
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_idle_0.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_laugh_0.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_laugh_1.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_onfire_0.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_release_abbreviated_0.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_release_abbreviated_1.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_release_abbreviated_2.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_release_abbreviated_4.png",
      "/sprites/deltarune/ch3/eram/spr_shadow_mantle_side_l_0.png"
    ]
  },
  {
    "id": "everyman",
    "name": "Everyman",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_0.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_1.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_10.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_11.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_2.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_3.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_4.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_5.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_6.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_7.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_8.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_floathead_9.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_walk_0.png",
      "/sprites/Undertale/truelab/everyman/spr_strangeman_walk_1_fixed.png"
    ]
  },
  {
    "id": "faun",
    "name": "Faun",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/faun/spr_faun_0.png",
      "/sprites/Undertale/snowdin/faun/spr_faun_1.png"
    ]
  },
  {
    "id": "ferry",
    "name": "Ferry",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/ferry/spr_ferry_1.png"
    ]
  },
  {
    "id": "ffroggit",
    "name": "Ffroggit",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/ffroggit/spr_finalfroggit_0.png",
      "/sprites/Undertale/core/ffroggit/spr_finalfroggit_head_0.png",
      "/sprites/Undertale/core/ffroggit/spr_finalfroggit_head_hurt_0.png"
    ]
  },
  {
    "id": "ficuslicker",
    "name": "Ficuslicker",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/ficuslicker/spr_regnpc_1_0.png",
      "/sprites/Undertale/core/ficuslicker/spr_regnpc_1_1.png"
    ]
  },
  {
    "id": "fishrecepcionist",
    "name": "Fishrecepcionist",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/fishrecepcionist/spr_hotel_receptionist2_0.png",
      "/sprites/Undertale/core/fishrecepcionist/spr_hotel_receptionist2_1.png"
    ]
  },
  {
    "id": "flowers",
    "name": "Flowers",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/flowers/spr_flowercontainer_0.png",
      "/sprites/deltarune/ch1/flowers/spr_flowercontainer_1.png",
      "/sprites/deltarune/ch1/flowers/spr_flowercontainer_2.png",
      "/sprites/deltarune/ch1/flowers/spr_flowercontainer_3.png",
      "/sprites/deltarune/ch1/flowers/spr_flowercontainer_4.png",
      "/sprites/deltarune/ch1/flowers/spr_flowercontainer_5.png",
      "/sprites/deltarune/ch1/flowers/spr_flowercontainer_6.png"
    ]
  },
  {
    "id": "flowey",
    "name": "Flowey",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/flowey/spr_flowey_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_as_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_as_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_as_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_as_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_skulllaugh_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_toskull_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_toskull_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_toskull_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_toskull_4.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_10.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_11.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_12.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_13.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_14.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_4.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_5.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_6.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_7.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_8.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_9.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_d_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_d_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_d_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_l_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_flowey_wilted_l_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_10.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_11.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_12.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_13.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_14.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_15.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_16.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_17.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_18.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_19.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_20.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_4.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_5.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_6.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_7.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_8.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_end_9.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_4.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_5.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_6.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_7.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_8.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l_9.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_4.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_5.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_6.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_7.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_8.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l2_9.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_10.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_4.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_5.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_6.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_7.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_8.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyface_l3_9.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweygonk_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweygonk_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweygonk_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweygrin_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweygrin_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweygrow_5.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweygrow_8.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweyhurt_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweylaughoverworld_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweylaughoverworld_2.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweypissed_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweypissed_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweysassy_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweysassy_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweysink_3.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweytoriel_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweytoriel_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweytoriel2_0.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweytoriel2_1.png",
      "/sprites/Undertale/ruinas/flowey/spr_floweywink_0.png"
    ]
  },
  {
    "id": "foxhead",
    "name": "Foxhead",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/foxhead/spr_disembodiedfoxhead_0.png",
      "/sprites/Undertale/hotland/foxhead/spr_disembodiedfoxhead_1.png"
    ]
  },
  {
    "id": "frisk",
    "name": "Frisk",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/frisk/spr_asriel_hug_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_asriel_hug_1.png",
      "/sprites/Undertale/ruinas/frisk/spr_asriel_hug_10.png",
      "/sprites/Undertale/ruinas/frisk/spr_asriel_hug_2.png",
      "/sprites/Undertale/ruinas/frisk/spr_convenientlamp_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_f_maincharad_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_f_maincharad_1.png",
      "/sprites/Undertale/ruinas/frisk/spr_f_maincharad_3.png",
      "/sprites/Undertale/ruinas/frisk/spr_labcamera_emergency_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_mainchara_lie_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_mainchara_lie_2_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_mainchara_pourwater_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_mainchara_pourwater_5.png",
      "/sprites/Undertale/ruinas/frisk/spr_maincharad_pranked_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_maincharad_stark_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_maincharad_umbrella_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_maincharal_pranked_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_maincharal_stark_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_maincharal_tomato_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_maincharar_stark_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_toriel_handhold_l_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_toriel_hug_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_toriel_hug_2.png",
      "/sprites/Undertale/ruinas/frisk/spr_toriel_ruffle_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_undyne_grableap_0.png",
      "/sprites/Undertale/ruinas/frisk/spr_undyne_grableap_1.png",
      "/sprites/Undertale/ruinas/frisk/spr_undyne_grableap_3.png"
    ]
  },
  {
    "id": "froggit",
    "name": "Froggit",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/froggit/spr_froggit_2.png",
      "/sprites/Undertale/ruinas/froggit/spr_froggit_3.png",
      "/sprites/Undertale/ruinas/froggit/spr_smallfrog_0.png"
    ]
  },
  {
    "id": "fukufire",
    "name": "Fukufire",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/fukufire/spr_fukufire_0.png",
      "/sprites/Undertale/hotland/fukufire/spr_npc_greenfire_0.png",
      "/sprites/Undertale/hotland/fukufire/spr_npc_greenfire_2.png",
      "/sprites/Undertale/hotland/fukufire/spr_npc_greenfire_3.png"
    ]
  },
  {
    "id": "gasterblaster",
    "name": "Gasterblaster",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/gasterblaster/spr_gasterblaster_0.png"
    ]
  },
  {
    "id": "gasterfollower1",
    "name": "Gasterfollower1",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/gasterfollower1/spr_g_follower_1_0.png",
      "/sprites/Undertale/core/gasterfollower1/spr_g_follower_1_1.png"
    ]
  },
  {
    "id": "gasterfollower2",
    "name": "Gasterfollower2",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/gasterfollower2/spr_g_follower_2_0.png"
    ]
  },
  {
    "id": "gasterfollower3",
    "name": "Gasterfollower3",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/gasterfollower3/spr_g_follower_3_0.png",
      "/sprites/Undertale/core/gasterfollower3/spr_g_follower_3_1.png"
    ]
  },
  {
    "id": "gerson",
    "name": "Gerson",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/gerson/spr_gerson_1_processed.png"
    ]
  },
  {
    "id": "giftbear",
    "name": "Giftbear",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/giftbear/spr_npc_giftbear_0.png",
      "/sprites/Undertale/snowdin/giftbear/spr_npc_giftbear_1.png"
    ]
  },
  {
    "id": "glyde",
    "name": "Glyde",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/glyde/spr_glyde_hurt_0.png"
    ]
  },
  {
    "id": "gonerclam",
    "name": "Gonerclam",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/gonerclam/spr_gonerclam_1.png"
    ]
  },
  {
    "id": "gonerkid",
    "name": "Gonerkid",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/gonerkid/spr_gonerkid_1.png"
    ]
  },
  {
    "id": "greatdog",
    "name": "Greatdog",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/greatdog/spr_bigdog_side_0.png",
      "/sprites/Undertale/snowdin/greatdog/spr_bigdog_side_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogboredwalk_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogbuttwalk_0.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogbuttwalk_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_2.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_21.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_3.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_33.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_34.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_36.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_4.png",
      "/sprites/Undertale/snowdin/greatdog/spr_doglick_5.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogpoff_23.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogpoff_24.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogpoff_67.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogpoff_70.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogpoff_73.png",
      "/sprites/Undertale/snowdin/greatdog/spr_dogspear_0.png",
      "/sprites/Undertale/snowdin/greatdog/spr_greatdog_n_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_lumpdog_0.png",
      "/sprites/Undertale/snowdin/greatdog/spr_lumpdog_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_lumpdog_2.png",
      "/sprites/Undertale/snowdin/greatdog/spr_lumpdog_3.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_bigdog_0.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_bigdog_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_bigdog_2.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_prisoner_dog_big_0.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_prisoner_dog_big_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_prisoner_dog_big_2.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_prisoner_dog_big_3.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_saddog_0.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_saddog_1.png",
      "/sprites/Undertale/snowdin/greatdog/spr_npc_saddog_2.png"
    ]
  },
  {
    "id": "grillby",
    "name": "Grillby",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/grillby/spr_grillby_d_0.png",
      "/sprites/Undertale/snowdin/grillby/spr_grillby_d_1.png",
      "/sprites/Undertale/snowdin/grillby/spr_npc_grillby_0.png",
      "/sprites/Undertale/snowdin/grillby/spr_npc_grillby_4.png"
    ]
  },
  {
    "id": "gyftrot",
    "name": "Gyftrot",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/gyftrot/spr_gyftrot_1.png"
    ]
  },
  {
    "id": "hammerguy",
    "name": "Hammerguy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/hammerguy/spr_hammerguy_2.png",
      "/sprites/deltarune/ch1/hammerguy/spr_hammerguy_3.png",
      "/sprites/deltarune/ch1/hammerguy/spr_hammerguy_hit_4.png",
      "/sprites/deltarune/ch1/hammerguy/spr_hammerguy_hit_old_0.png",
      "/sprites/deltarune/ch1/hammerguy/spr_hammerguy_hit_old_4.png"
    ]
  },
  {
    "id": "hand",
    "name": "Hand",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/hand/spr_hotel_receptionist1_0.png",
      "/sprites/Undertale/core/hand/spr_hotel_receptionist1_1.png",
      "/sprites/Undertale/core/hand/spr_npc_receptionist_0.png",
      "/sprites/Undertale/core/hand/spr_npc_receptionist_1.png"
    ]
  },
  {
    "id": "hatguy",
    "name": "Hatguy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/hatguy/spr_hatguy_dance_0.png",
      "/sprites/deltarune/ch2/hatguy/spr_hatguy_dance_1.png",
      "/sprites/deltarune/ch2/hatguy/spr_hatguy_idle_2.png",
      "/sprites/deltarune/ch2/hatguy/spr_hatguy_idle_3.png",
      "/sprites/deltarune/ch2/hatguy/spr_npc_hatguy_0.png"
    ]
  },
  {
    "id": "hathy",
    "name": "Hathy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/hathy/spr_bakesale_hathy_0.png",
      "/sprites/deltarune/ch1/hathy/spr_bakesale_hathy_1.png",
      "/sprites/deltarune/ch1/hathy/spr_crowdpiece_0.png",
      "/sprites/deltarune/ch1/hathy/spr_heartenemy_hurt_0.png",
      "/sprites/deltarune/ch1/hathy/spr_heartenemy_idle_0.png",
      "/sprites/deltarune/ch1/hathy/spr_heartenemy_spared_0.png"
    ]
  },
  {
    "id": "hathyx",
    "name": "Hathyx",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/hathyx/spr_hathyx_hurt_0.png",
      "/sprites/deltarune/ch1/hathyx/spr_hathyx_idle_0.png",
      "/sprites/deltarune/ch1/hathyx/spr_hathyx_spared_0.png"
    ]
  },
  {
    "id": "heatflamesman",
    "name": "Heatflamesman",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/heatflamesman/spr_heatsf_normal_0.png",
      "/sprites/Undertale/hotland/heatflamesman/spr_heatsf_normal_1.png",
      "/sprites/Undertale/hotland/heatflamesman/spr_heatsf_remember_0.png",
      "/sprites/Undertale/hotland/heatflamesman/spr_heatsf_remember_1.png",
      "/sprites/Undertale/hotland/heatflamesman/spr_heatsf_shock_0.png",
      "/sprites/Undertale/hotland/heatflamesman/spr_heatsf_shock_1.png"
    ]
  },
  {
    "id": "hotdogharpy",
    "name": "Hotdogharpy",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/hotdogharpy/spr_hotdog_harpy_0.png",
      "/sprites/Undertale/hotland/hotdogharpy/spr_hotdog_harpy_1.png"
    ]
  },
  {
    "id": "icecap",
    "name": "Icecap",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/icecap/spr_icecap_1.png",
      "/sprites/Undertale/snowdin/icecap/spr_icecapb_npc_0.png",
      "/sprites/Undertale/snowdin/icecap/spr_icecapb_npc_1.png",
      "/sprites/Undertale/snowdin/icecap/spr_icecapg_npc_0.png",
      "/sprites/Undertale/snowdin/icecap/spr_icecapg_npc_1.png",
      "/sprites/Undertale/snowdin/icecap/spr_icecapr_npc_0.png",
      "/sprites/Undertale/snowdin/icecap/spr_icecapr_npc_1.png"
    ]
  },
  {
    "id": "icecreamguy",
    "name": "Icecreamguy",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/icecreamguy/spr_icecreamguy_anim_0.png",
      "/sprites/Undertale/snowdin/icecreamguy/spr_icecreamguy_happy_0.png",
      "/sprites/Undertale/snowdin/icecreamguy/spr_icecreamguy_happy_1.png",
      "/sprites/Undertale/snowdin/icecreamguy/spr_npc_nicecream_0.png",
      "/sprites/Undertale/snowdin/icecreamguy/spr_npc_nicecream_mop_0.png"
    ]
  },
  {
    "id": "icee",
    "name": "Icee",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/icee/spr_npc_icee_suit_0.png",
      "/sprites/deltarune/ch2/icee/spr_npc_icee_suit_1.png",
      "/sprites/deltarune/ch2/icee/spr_npc_icee_suit_2.png",
      "/sprites/deltarune/ch2/icee/spr_npc_icee_suit_3.png"
    ]
  },
  {
    "id": "icemascot",
    "name": "Icemascot",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/icemascot/spr_npc_icemascot_fake_0.png",
      "/sprites/deltarune/ch1/icemascot/spr_npc_icemascot_fake_1.png",
      "/sprites/deltarune/ch1/icemascot/spr_npc_icemascot_fake_3.png"
    ]
  },
  {
    "id": "icewarrior",
    "name": "Icewarrior",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/icewarrior/spr_npc_warrior_0.png",
      "/sprites/deltarune/ch2/icewarrior/spr_npc_warrior_1.png",
      "/sprites/deltarune/ch2/icewarrior/spr_npc_warrior_2.png",
      "/sprites/deltarune/ch2/icewarrior/spr_npc_warrior_3.png",
      "/sprites/deltarune/ch2/icewarrior/spr_npc_warrior_4.png",
      "/sprites/deltarune/ch2/icewarrior/spr_npc_warrior_5.png"
    ]
  },
  {
    "id": "icewolf",
    "name": "Icewolf",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/icewolf/spr_icewolf_0.png",
      "/sprites/Undertale/snowdin/icewolf/spr_icewolf_1.png",
      "/sprites/Undertale/snowdin/icewolf/spr_npc_icewolf_0.png",
      "/sprites/Undertale/snowdin/icewolf/spr_wolfthrow_10.png",
      "/sprites/Undertale/snowdin/icewolf/spr_wolfthrow_2.png",
      "/sprites/Undertale/snowdin/icewolf/spr_wolfthrow_3.png",
      "/sprites/Undertale/snowdin/icewolf/spr_wolfthrow_4.png"
    ]
  },
  {
    "id": "iconman",
    "name": "Iconman",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/iconman/spr_npc_iconman_0.png",
      "/sprites/deltarune/ch2/iconman/spr_npc_iconman_alt_0.png"
    ]
  },
  {
    "id": "innkeeper",
    "name": "Innkeeper",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/innkeeper/spr_npc_innkeep_0.png",
      "/sprites/Undertale/snowdin/innkeeper/spr_npc_innkeep_1.png"
    ]
  },
  {
    "id": "jackenstein",
    "name": "Jackenstein",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch4"
    ],
    "sprites": [
      "/sprites/deltarune/ch4/jackenstein/spr_dancing_lantern_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_dancing_lantern_1.png",
      "/sprites/deltarune/ch4/jackenstein/spr_guywhoappearswhenyoudroppedyourtutu_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_guywhoappearswhenyoudroppedyourtutu_1.png",
      "/sprites/deltarune/ch4/jackenstein/spr_guywhoappearswhenyoudroppedyourtutu_2.png",
      "/sprites/deltarune/ch4/jackenstein/spr_guywhoappearswhenyouhavetakentoolonginaghosthouse_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackenstein_catch_1.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackenstein_party_hug_1.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackenstein_party_nuzzle_1.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackenstein_walk_up_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackolantern_but_politer_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackolantern_cry_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackolantern_frown_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_jackolantern_stunned_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_cleaning_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_cleaning_look_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_climb_look_left_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_climb_party_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_clutch_head_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_cover_face_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_cover_face_right_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_lift_head_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_lift_head_3.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_scared_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_talk_0.png",
      "/sprites/deltarune/ch4/jackenstein/spr_npc_jackenstein_talk_2.png",
      "/sprites/deltarune/ch4/jackenstein/spr_small_jackolantern_0.png"
    ]
  },
  {
    "id": "jackperson",
    "name": "Jackperson",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/jackperson/spr_jackperson_0.png",
      "/sprites/deltarune/ch1/jackperson/spr_jackperson_2.png"
    ]
  },
  {
    "id": "janitor",
    "name": "Janitor",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/janitor/spr_slimejanitor_0.png",
      "/sprites/Undertale/core/janitor/spr_slimejanitor_5.png"
    ]
  },
  {
    "id": "jerry",
    "name": "Jerry",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/jerry/spr_jerry_1.png"
    ]
  },
  {
    "id": "jevil",
    "name": "Jevil",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/jevil/spr_joker_dance_0.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_dance_1.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_dance_2.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_dance_4.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_dance_5.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_main_0.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_main_1.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_scythebody_0.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_teleport_1.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_teleport_r_1.png",
      "/sprites/deltarune/ch1/jevil/spr_joker_tired_0.png",
      "/sprites/deltarune/ch1/jevil/spr_jokerhead_0.png",
      "/sprites/deltarune/ch1/jevil/spr_jokerhead_1.png",
      "/sprites/deltarune/ch1/jevil/spr_jokerhead_2.png",
      "/sprites/deltarune/ch1/jevil/spr_jokerhead_3.png"
    ]
  },
  {
    "id": "jigsawry",
    "name": "Jigsawry",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/jigsawry/spr_jigsawry_clobbered_0.png",
      "/sprites/deltarune/ch1/jigsawry/spr_jigsawry_hurt_0.png",
      "/sprites/deltarune/ch1/jigsawry/spr_jigsawry_idle_0.png",
      "/sprites/deltarune/ch1/jigsawry/spr_jigsawry_spared_0.png",
      "/sprites/deltarune/ch1/jigsawry/spr_jigsawry_spared_5.png",
      "/sprites/deltarune/ch1/jigsawry/spr_jigsawry_wounded_4.png",
      "/sprites/deltarune/ch1/jigsawry/spr_jigsawry_wounded_5.png"
    ]
  },
  {
    "id": "jockington",
    "name": "Jockington",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/jockington/spr_face_jock0_0.png",
      "/sprites/deltarune/ch1/jockington/spr_jockington_lt_0.png",
      "/sprites/deltarune/ch1/jockington/spr_jockington_lt_1.png",
      "/sprites/deltarune/ch1/jockington/spr_jockington_rt_0.png",
      "/sprites/deltarune/ch1/jockington/spr_jockington_rt_1.png",
      "/sprites/deltarune/ch1/jockington/spr_jockington_ut_0.png"
    ]
  },
  {
    "id": "king",
    "name": "King",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/king/spr_chainking_hurt_0.png",
      "/sprites/deltarune/ch1/king/spr_chainking_idle_0.png",
      "/sprites/deltarune/ch1/king/spr_chainking_idle_1.png",
      "/sprites/deltarune/ch1/king/spr_chainking_idle_2.png",
      "/sprites/deltarune/ch1/king/spr_chainking_idle_3.png",
      "/sprites/deltarune/ch1/king/spr_chainking_pullback_0.png",
      "/sprites/deltarune/ch1/king/spr_chainking_receive_0.png",
      "/sprites/deltarune/ch1/king/spr_chainking_spin_0.png",
      "/sprites/deltarune/ch1/king/spr_chainking_spin_1.png",
      "/sprites/deltarune/ch1/king/spr_chainking_toss_0.png",
      "/sprites/deltarune/ch1/king/spr_chainking_toss_1.png",
      "/sprites/deltarune/ch1/king/spr_chainking_toss_2.png",
      "/sprites/deltarune/ch1/king/spr_chainking_toss_3.png",
      "/sprites/deltarune/ch1/king/spr_chainking_toss_old_0.png",
      "/sprites/deltarune/ch1/king/spr_chainking_toss_old_1.png",
      "/sprites/deltarune/ch1/king/spr_chainking_toss_old_2.png",
      "/sprites/deltarune/ch1/king/spr_face_king_0.png",
      "/sprites/deltarune/ch1/king/spr_face_king_1.png",
      "/sprites/deltarune/ch1/king/spr_face_king_11.png",
      "/sprites/deltarune/ch1/king/spr_face_king_12.png",
      "/sprites/deltarune/ch1/king/spr_face_king_13.png",
      "/sprites/deltarune/ch1/king/spr_face_king_2.png",
      "/sprites/deltarune/ch1/king/spr_face_king_3.png",
      "/sprites/deltarune/ch1/king/spr_face_king_4.png",
      "/sprites/deltarune/ch1/king/spr_face_king_5.png",
      "/sprites/deltarune/ch1/king/spr_face_king_6.png",
      "/sprites/deltarune/ch1/king/spr_face_king_7.png",
      "/sprites/deltarune/ch1/king/spr_face_king_8.png",
      "/sprites/deltarune/ch1/king/spr_king_battlepose_0.png",
      "/sprites/deltarune/ch1/king/spr_king_fall_0.png",
      "/sprites/deltarune/ch1/king/spr_king_kneel_0.png",
      "/sprites/deltarune/ch1/king/spr_king_kneel_3.png",
      "/sprites/deltarune/ch1/king/spr_king_kneel_4.png",
      "/sprites/deltarune/ch1/king/spr_king_kneeldown_0.png",
      "/sprites/deltarune/ch1/king/spr_king_kneeldown_2.png",
      "/sprites/deltarune/ch1/king/spr_king_laugh_0.png",
      "/sprites/deltarune/ch1/king/spr_king_liftkris_0.png",
      "/sprites/deltarune/ch1/king/spr_king_liftkris_1.png",
      "/sprites/deltarune/ch1/king/spr_king_liftkris_3.png",
      "/sprites/deltarune/ch1/king/spr_king_pullweapon_6.png",
      "/sprites/deltarune/ch1/king/spr_king_shock_0.png",
      "/sprites/deltarune/ch1/king/spr_king_sulk_drink_left_0.png",
      "/sprites/deltarune/ch1/king/spr_king_sulk_drink_left_1.png",
      "/sprites/deltarune/ch1/king/spr_kingl_0.png",
      "/sprites/deltarune/ch1/king/spr_kingr_asleep_0.png",
      "/sprites/deltarune/ch1/king/spr_kingr_fallasleep_0.png",
      "/sprites/deltarune/ch1/king/spr_kingr_fallasleep_1.png",
      "/sprites/deltarune/ch1/king/spr_kingr_fallasleep_2.png",
      "/sprites/deltarune/ch1/king/spr_npc_king_sulk_turn_0.png"
    ]
  },
  {
    "id": "kk",
    "name": "Kk",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/kk/spr_kk_hurt_0.png",
      "/sprites/deltarune/ch2/kk/spr_kk_static_0.png",
      "/sprites/deltarune/ch2/kk/spr_npc_kk_0.png",
      "/sprites/deltarune/ch2/kk/spr_npc_kk_1.png",
      "/sprites/deltarune/ch2/kk/spr_npc_kk_highhat_0.png",
      "/sprites/deltarune/ch2/kk/spr_npc_kk_highhat_1.png",
      "/sprites/deltarune/ch2/kk/spr_npc_kk_music_1.png",
      "/sprites/deltarune/ch2/kk/spr_npc_kk_music_2.png"
    ]
  },
  {
    "id": "knightknight",
    "name": "Knightknight",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/knightknight/Knight_knight (1).jpg"
    ]
  },
  {
    "id": "kris",
    "name": "Kris",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/kris/spr_cutscene_27_queen_hand_party_0.png",
      "/sprites/deltarune/ch1/kris/spr_cutscene_27_queen_hand_surprise_all_0.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_grabheart_5.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_grabheart_old_4.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ground_0.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ground_1.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_heartwalk_0.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_pullheart_0.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_pullheart_2.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_pullheart_3.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_pullheart_old_0.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_readyhand_14.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ul_0.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ul_1.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ur_pullknife_19.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ur_pullknife_24.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ur_pullknife_27.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ur_pullknife_3.png",
      "/sprites/deltarune/ch1/kris/spr_dkris_ur_pullknife_9.png",
      "/sprites/deltarune/ch1/kris/spr_king_liftkris_0.png",
      "/sprites/deltarune/ch1/kris/spr_king_liftkris_1.png",
      "/sprites/deltarune/ch1/kris/spr_king_liftkris_3.png",
      "/sprites/deltarune/ch1/kris/spr_kris_drop_0.png",
      "/sprites/deltarune/ch1/kris/spr_kris_dw_land_example_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_kris_dw_land_example_dark_1.png",
      "/sprites/deltarune/ch1/kris/spr_kris_dw_land_example_dark_2.png",
      "/sprites/deltarune/ch1/kris/spr_kris_fall_0.png",
      "/sprites/deltarune/ch1/kris/spr_kris_fall_example_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_kris_fall_example_dark_1.png",
      "/sprites/deltarune/ch1/kris/spr_kris_fall_example_dark_2.png",
      "/sprites/deltarune/ch1/kris/spr_kris_fallen_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_kris_fell_0.png",
      "/sprites/deltarune/ch1/kris/spr_kris_hug_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_attack_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_attack_old_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_bow_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_defend_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_hurt_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_idle_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_intro_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_intro_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_pirouette_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_pirouette_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_pirouette_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_pirouette_4.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_pirouette_5.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_victory_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_victory_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisb_victory_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_dark_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_dark_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_dark_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_slide_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_slide_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_slide_light_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_dark_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_dark_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_dark_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_dark_1.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_dark_2.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_dark_3.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_kneel_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_sit_0.png",
      "/sprites/deltarune/ch1/kris/spr_npc_jackenstein_climb_party_0.png",
      "/sprites/deltarune/ch1/kris/spr_susie_grabsmile_0.png",
      "/sprites/deltarune/ch1/kris/spr_susie_grabsmile_4.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisdrop_0.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisgrab_0.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisgrab_1.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisgrab_3.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisgrab_5.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisgrab_eat_1.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisgrab_eat_6.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisshoulder_1.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisshoulder_5.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisshoulder_r_0.png",
      "/sprites/deltarune/ch1/kris/spr_susie_krisshoulder_r_5.png",
      "/sprites/deltarune/ch1/kris/spr_toriel_handhold_r_0.png",
      "/sprites/deltarune/ch1/kris/spr_toriel_hug_0.png",
      "/sprites/deltarune/ch1/kris/spr_toriel_hug_1.png",
      "/sprites/deltarune/ch1/kris/spr_toriel_hug_2.png"
    ]
  },
  {
    "id": "lancer",
    "name": "Lancer",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/lancer/spr_face_l0_0.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_1.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_10.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_11.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_12.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_13.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_14.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_2.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_3.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_4.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_5.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_6.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_7.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_8.png",
      "/sprites/deltarune/ch1/lancer/spr_face_l0_9.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_battle_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_battle_1.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_battle_2.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_battle_hurt_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_dark_relax_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_dt_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_dt_unhappy_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_l_unhappy_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_lt_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_lt_laugh_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_lt_laugh_mustache_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_lt_mustache_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_lt_stool_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancer_pose_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancerbike_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancerbike_1.png",
      "/sprites/deltarune/ch1/lancer/spr_lancerbike_2.png",
      "/sprites/deltarune/ch1/lancer/spr_lancerbike_3.png",
      "/sprites/deltarune/ch1/lancer/spr_lancerbike_earcover_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancerbike_hurt_0.png",
      "/sprites/deltarune/ch1/lancer/spr_lancerbike_l_0.png",
      "/sprites/deltarune/ch1/lancer/spr_susie_finelancer_0.png",
      "/sprites/deltarune/ch1/lancer/spr_susie_grablancer_7.png",
      "/sprites/deltarune/ch1/lancer/spr_susie_grablancer_8.png"
    ]
  },
  {
    "id": "lanino",
    "name": "Lanino",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch3"
    ],
    "sprites": [
      "/sprites/deltarune/ch3/lanino/spr_board_lanino_glasses_mad_right_0.png",
      "/sprites/deltarune/ch3/lanino/spr_board_lanino_glasses_right_0.png",
      "/sprites/deltarune/ch3/lanino/spr_board_lanino_glasses_right_blush_0.png",
      "/sprites/deltarune/ch3/lanino/spr_board_lanino_gloat_0.png",
      "/sprites/deltarune/ch3/lanino/spr_board_lanino_sad_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_angry_right_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_angrypose_right_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_cool_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_cool_3.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_eyesclosed_left_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_eyesclosed_right_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_gloat_left_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_hurt_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_idle_left_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_idle_right_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_sadconfused_left_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_shocked_right_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_smileembarassed_left_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_lanino_smileembarassed_right_nowand_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_blush_talk_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_cool_talk_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_cry_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_sneeze_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_sneeze_1.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_sunglasses_remove_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_sunglasses_remove_1.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_sunglasses_remove_4.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_sunglasses_remove_talk_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_talk_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_lanino_talk_sad_0.png",
      "/sprites/deltarune/ch3/lanino/spr_npc_rouxls_weather_gaming_chef_0.png",
      "/sprites/deltarune/ch3/lanino/spr_rouxls_hugfriends_0.png",
      "/sprites/deltarune/ch3/lanino/spr_rouxls_hugfriends_5.png"
    ]
  },
  {
    "id": "lemonbread",
    "name": "Lemonbread",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/lemonbread/spr_amalgam_save_0.png",
      "/sprites/Undertale/truelab/lemonbread/spr_amalgam_save_1.png",
      "/sprites/Undertale/truelab/lemonbread/spr_amalgam_save_2.png",
      "/sprites/Undertale/truelab/lemonbread/spr_amalgam_save_3.png",
      "/sprites/Undertale/truelab/lemonbread/spr_amalgam_save_4.png",
      "/sprites/Undertale/truelab/lemonbread/spr_amalgam_save_npc_1.png",
      "/sprites/Undertale/truelab/lemonbread/spr_lemonbread_head_0.png",
      "/sprites/Undertale/truelab/lemonbread/spr_lemonbread_head_1.png",
      "/sprites/Undertale/truelab/lemonbread/spr_lemonbread_head_2.png",
      "/sprites/Undertale/truelab/lemonbread/spr_lemonbread_head_3.png",
      "/sprites/Undertale/truelab/lemonbread/spr_lemonbread_head_5.png",
      "/sprites/Undertale/truelab/lemonbread/spr_lemonbread_melt_0.png"
    ]
  },
  {
    "id": "lesserdog",
    "name": "Lesserdog",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/lesserdog/spr_dogneck5_0.png",
      "/sprites/Undertale/snowdin/lesserdog/spr_lessdog_table_0.png",
      "/sprites/Undertale/snowdin/lesserdog/spr_lessdogsnow_0.png",
      "/sprites/Undertale/snowdin/lesserdog/spr_lesserdoge_0.png",
      "/sprites/Undertale/snowdin/lesserdog/spr_npc_prisoner_dog_lesser_0.png",
      "/sprites/Undertale/snowdin/lesserdog/spr_npc_prisoner_dog_lesser_1.png",
      "/sprites/Undertale/snowdin/lesserdog/spr_npc_prisoner_dog_lesser_2.png",
      "/sprites/Undertale/snowdin/lesserdog/spr_npc_prisoner_dog_lesser_3.png"
    ]
  },
  {
    "id": "littleasriel",
    "name": "Littleasriel",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_armcry_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_d_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_dt_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_hug_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_hug_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_hug_10.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_hug_2.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_l_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_land_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_lookdown_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_lt_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_lt_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_power_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_power_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_power_2.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_power_3.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_power_4.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_power_7.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_powerdown_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_powerdown_10.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_powerdown_9.png",
      "/sprites/Undertale/newhome/littleasriel/spr_asriel_tearsdry_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel0_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel1_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel1_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel2_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel2_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel3_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel3_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel4_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel4_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel5_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel5_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel7_0.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel7_1.png",
      "/sprites/Undertale/newhome/littleasriel/spr_face_asriel9_0.png"
    ]
  },
  {
    "id": "lizard",
    "name": "Lizard",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/lizard/spr_npc_liblizard_0.png",
      "/sprites/Undertale/snowdin/lizard/spr_npc_liblizard_1.png"
    ]
  },
  {
    "id": "loox",
    "name": "Loox",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas",
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/loox/spr_loox_0.png",
      "/sprites/Undertale/snowdin/loox/spr_npc_mikewazowski_0.png",
      "/sprites/Undertale/snowdin/loox/spr_npc_mikewazowski_1.png"
    ]
  },
  {
    "id": "loren",
    "name": "Loren",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/loren/spr_tonsildude_0.png",
      "/sprites/Undertale/waterfall/loren/spr_tonsildude_1.png"
    ]
  },
  {
    "id": "machine",
    "name": "Machine",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/machine/spr_dt_machine_0.png"
    ]
  },
  {
    "id": "maddummy",
    "name": "Maddummy",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/maddummy/spr_dummy_0.png",
      "/sprites/Undertale/waterfall/maddummy/spr_dummyglad_0.png",
      "/sprites/Undertale/waterfall/maddummy/spr_dummymad_0.png",
      "/sprites/Undertale/waterfall/maddummy/spr_dummymad_toot_0.png",
      "/sprites/Undertale/waterfall/maddummy/spr_dummymad_toot_1.png",
      "/sprites/Undertale/waterfall/maddummy/spr_dummymad_toot_2.png",
      "/sprites/Undertale/waterfall/maddummy/spr_dummymad_toot_3.png",
      "/sprites/Undertale/waterfall/maddummy/spr_dummysurprise_0.png",
      "/sprites/Undertale/waterfall/maddummy/spr_maddum_head_0.png",
      "/sprites/Undertale/waterfall/maddummy/spr_maddum_head_1.png",
      "/sprites/Undertale/waterfall/maddummy/spr_maddum_head_2.png",
      "/sprites/Undertale/waterfall/maddummy/spr_maddum_head_3.png"
    ]
  },
  {
    "id": "madjick",
    "name": "Madjick",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/madjick/spr_wizard_full_0.png"
    ]
  },
  {
    "id": "madmew",
    "name": "Madmew",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/madmew/spr_madmew_1.png"
    ]
  },
  {
    "id": "maus",
    "name": "Maus",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/maus/spr_cutscene_26_maus_0.png",
      "/sprites/deltarune/ch2/maus/spr_mauswheel_act_0.png"
    ]
  },
  {
    "id": "memoryhead",
    "name": "Memoryhead",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/memoryhead/spr_amalgam_sinkless3_0.png",
      "/sprites/Undertale/truelab/memoryhead/spr_memoryhead_0.png"
    ]
  },
  {
    "id": "mettaton",
    "name": "Mettaton",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_evillaugh_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_evillaugh_1.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_fingerup_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_handfold_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_handraise_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_handsonhead_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_mepose_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettanchor_shufflepaper_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_armsdown_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_armsdown_1.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_cackle_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_cackle_1.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_clap_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_clap_1.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_dress1_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_holdarm_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_noarm_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_pointingup_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettaton_pulldress_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_armsin_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_armsin_2.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_behind_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_nuts_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_nuts_1.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_nuts_2.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_nuts_3.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_rocketoff_0.png",
      "/sprites/Undertale/hotland/mettaton/spr_mettatonb_shirt_0.png"
    ]
  },
  {
    "id": "mettatonex",
    "name": "Mettatonex",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/mettatonex/spr_mett_o_upperbody_0.png",
      "/sprites/Undertale/core/mettatonex/spr_mett_o_upperbody_light_0.png",
      "/sprites/Undertale/core/mettatonex/spr_mettex_dark_0.png",
      "/sprites/Undertale/core/mettatonex/spr_mettex_npc_1.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_general_5.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_general_6.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_general_7.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_general_8.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_general_9.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_hurt_0.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_hurt_1.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface_hurt_2.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_0.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_1.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_2.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_3.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_4.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_5.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_6.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_7.png",
      "/sprites/Undertale/core/mettatonex/spr_mettface1_8.png"
    ]
  },
  {
    "id": "mettatonneo",
    "name": "Mettatonneo",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/mettatonneo/spr_mneo_face_0.png",
      "/sprites/Undertale/core/mettatonneo/spr_mneo_face_1.png",
      "/sprites/Undertale/core/mettatonneo/spr_mneo_face_2.png",
      "/sprites/Undertale/core/mettatonneo/spr_mneo_face_3.png",
      "/sprites/Undertale/core/mettatonneo/spr_mneo_face_4.png",
      "/sprites/Undertale/core/mettatonneo/spr_mneo_face_5.png",
      "/sprites/Undertale/core/mettatonneo/spr_mneo_face_6.png"
    ]
  },
  {
    "id": "migosp",
    "name": "Migosp",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/migosp/spr_migosp_0.png",
      "/sprites/Undertale/ruinas/migosp/spr_migosphappy_1.png",
      "/sprites/Undertale/ruinas/migosp/spr_migosphurt_0.png"
    ]
  },
  {
    "id": "migospel",
    "name": "Migospel",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/migospel/spr_migospel_1.png"
    ]
  },
  {
    "id": "mikes",
    "name": "Mikes",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch4"
    ],
    "sprites": [
      "/sprites/deltarune/ch4/mikes/spr_mic_2x_0.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_big_0.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_combo_0.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_m_0.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_m_3.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_m_7.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_med_sad_1.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_med_sad_5.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_med_sad_7.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_s_costume_remove_0.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_s_costume_remove_3.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_s_costume_remove_5.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_s_pointing_0.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_s_pointing_1.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_s_pointing_both_0.png",
      "/sprites/deltarune/ch4/mikes/spr_mike_small_0.png",
      "/sprites/deltarune/ch4/mikes/spr_npc_pippins_expressions_0.png",
      "/sprites/deltarune/ch4/mikes/spr_npc_pippins_expressions_1.png",
      "/sprites/deltarune/ch4/mikes/spr_npc_pippins_expressions_3.png",
      "/sprites/deltarune/ch4/mikes/spr_npc_pippins_jump_green_5.png",
      "/sprites/deltarune/ch4/mikes/spr_npc_pippins_jump_green_6.png",
      "/sprites/deltarune/ch4/mikes/spr_pippins_exasperated_down_0.png",
      "/sprites/deltarune/ch4/mikes/spr_pippins_exasperated_point_forward_0.png",
      "/sprites/deltarune/ch4/mikes/spr_pippins_exasperated_point_left_0.png",
      "/sprites/deltarune/ch4/mikes/spr_pippins_exasperated_stop_0.png",
      "/sprites/deltarune/ch4/mikes/spr_pippins_eyes_closed_0.png",
      "/sprites/deltarune/ch4/mikes/spr_pippins_shock_0.png",
      "/sprites/deltarune/ch4/mikes/spr_pippins_thinking_1.png"
    ]
  },
  {
    "id": "milklooker",
    "name": "Milklooker",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/milklooker/spr_npc_milklooker_0.png",
      "/sprites/deltarune/ch2/milklooker/spr_npc_milklooker_1.png"
    ]
  },
  {
    "id": "moldbygg",
    "name": "Moldbygg",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/moldbygg/spr_moldbygg_1.png"
    ]
  },
  {
    "id": "moldessa",
    "name": "Moldessa",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/moldessa/spr_moldessa_hurt_0.png"
    ]
  },
  {
    "id": "moldsmal",
    "name": "Moldsmal",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/moldsmal/spr_moldsmal_0.png"
    ]
  },
  {
    "id": "monsterkid",
    "name": "Monsterkid",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_battle_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_battle_etc_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_battle_etc_1.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_battle_etc_2.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_battle_etc_3.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_battle_shock_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_dt_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_dt_1.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_trip_l_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_trip_l_14.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_trip_l_15.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_trip_l_16.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_trip_l_18.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_trip_l_2.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_ut_l_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_mkid_ut_r_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_undyne_cheektug_0.png",
      "/sprites/Undertale/waterfall/monsterkid/spr_undynea_r_raiseup_0.png"
    ]
  },
  {
    "id": "mrelegance",
    "name": "Mrelegance",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/mrelegance/spr_npc_mrelegance_0.png",
      "/sprites/deltarune/ch1/mrelegance/spr_npc_mrelegance_1.png"
    ]
  },
  {
    "id": "mrsociety",
    "name": "Mrsociety",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/mrsociety/spr_npc_mrsociety_0.png"
    ]
  },
  {
    "id": "muffet",
    "name": "Muffet",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/muffet/spr_muffet_buysell_0.png",
      "/sprites/Undertale/hotland/muffet/spr_muffet_buysell_1.png",
      "/sprites/Undertale/hotland/muffet/spr_muffet_overworld_0.png",
      "/sprites/Undertale/hotland/muffet/spr_muffet_overworld_3.png",
      "/sprites/Undertale/hotland/muffet/spr_muffet_overworld_4.png",
      "/sprites/Undertale/hotland/muffet/spr_muffethurt_0.png"
    ]
  },
  {
    "id": "muffin",
    "name": "Muffin",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/muffin/spr_cupcakemonster_0.png",
      "/sprites/Undertale/hotland/muffin/spr_cupcakemonster_1.png"
    ]
  },
  {
    "id": "mushroomguy",
    "name": "Mushroomguy",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/mushroomguy/spr_mushroomdance_end_1.png",
      "/sprites/Undertale/waterfall/mushroomguy/spr_mushroomdance_end_2.png",
      "/sprites/Undertale/waterfall/mushroomguy/spr_mushroomdance_prep_0.png"
    ]
  },
  {
    "id": "napstablook",
    "name": "Napstablook",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/napstablook/spr_napstabattle_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_napstablook_adjust_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_napstablook_d_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_napstablook_gr_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_napstablook_l_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_napstablook_r_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_npc_napstablook_police_down_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_npc_napstablook_police_left_0.png",
      "/sprites/Undertale/ruinas/napstablook/spr_npc_napstablook_police_right_0.png"
    ]
  },
  {
    "id": "noelle",
    "name": "Noelle",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_kneel_laugh_eyes_open_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_kneel_laugh_eyes_open_1.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_kneel_lowered_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_walk_happy_up_2.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_walk_happy_up_3.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_walk_happy_up_left_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_walk_happy_up_left_1.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_walk_happy_up_left_2.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_23b_noelle_walk_happy_up_left_3.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_desk_down_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_desk_left_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_desk_left_unhappy_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_desk_shocked_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_a_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_a_1.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_a_2.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_a_3.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_b_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_b_1.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_b_2.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_side_edit_b_3.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_down_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_down_1.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_down_2.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_down_3.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_left_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_left_1.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_left_2.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_left_3.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_right_0.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_right_1.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_right_2.png",
      "/sprites/deltarune/ch1/noelle/spr_cutscene_28b_noelle_walk_books_right_3.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_1.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_2.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_3.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_4.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_5.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_6.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_7.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_8.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n_matome_9.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n1_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n2_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n3_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n4_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n5_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n6_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n7_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n8_0.png",
      "/sprites/deltarune/ch1/noelle/spr_face_n9_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_blush_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_blush_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_coaster_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_collapsed_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_collapsed_look_up_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_collapsed_reach_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_collapsed_reach_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_cower_left_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_cower_left_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_cower_right_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_cower_right_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_face_right_smile_less_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_done_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_done_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_done_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_done_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_done_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_done_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_right_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_game_unhappy_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_hand_mouth_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_hand_mouth_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_head_lowered_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_head_lowered_left_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_head_lowered_right_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_hurt_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_kneel_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_kneel_face_left_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_kneel_happy_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_kneel_shocked_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_kneel_shocked_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_l_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_laugh_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_laugh_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_point_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_r_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_sad_left_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_shocked_behind_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_shocked_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_shocked_lw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_smile_forward_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_smile_left_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_smile_left_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_surprise_left_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_blush_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_blush_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_blush_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_blush_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_lw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_lw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_lw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_lw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_sad_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_sad_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_sad_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_down_sad_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_face_up_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_face_up_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_face_up_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_face_up_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_blush_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_blush_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_blush_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_blush_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_lw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_lw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_lw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_lw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_mad_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_mad_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_mad_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_mad_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_sad_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_sad_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_sad_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_sad_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_smile_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_smile_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_smile_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_left_smile_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_blush_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_blush_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_blush_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_blush_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_lw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_noeyes_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_noeyes_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_noeyes_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_noeyes_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_shocked_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_shocked_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_shocked_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_sad_shocked_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_smile_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_smile_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_smile_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_right_smile_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_dw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_dw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_dw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_headtilt_dw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_lw_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_lw_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_lw_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_walk_up_lw_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_10.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_11.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_6.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_7.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_8.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_9.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_nurse_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_nurse_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_act_nurse_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_actready_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_actready_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_attack_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_attack_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_attack_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_attack_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_attack_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_attackready_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_10.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_11.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_12.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_13.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_14.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_6.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_7.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_8.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_9.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_10.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_11.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_12.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_13.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_14.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_6.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_7.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_8.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_battleintro_sideb_9.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defeat_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defend_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defend_sideb_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defend_sideb_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defend_sideb_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defend_sideb_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defend_sideb_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_defend_sideb_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_float_sideb_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_float_sideb_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_float_sideb_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_float_sideb_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_hurt_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_hurt_sideb_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_sideb_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_sideb_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_sideb_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_sideb_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_idle_sideb_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_6.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_7.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_8.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_item_9.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_itemready_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_itemready_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_pray_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_pray_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_pray_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_pray_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_pray_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_6.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_7.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_8.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_special_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_special_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_special_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spell_special_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_spellready_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_1.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_2.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_3.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_4.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_5.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_6.png",
      "/sprites/deltarune/ch1/noelle/spr_noelleb_victory_7.png"
    ]
  },
  {
    "id": "normalnpc",
    "name": "Normalnpc",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/normalnpc/spr_normalnpc_0.png",
      "/sprites/deltarune/ch1/normalnpc/spr_normalnpc_1.png"
    ]
  },
  {
    "id": "nubert",
    "name": "Nubert",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/nubert/spr_npc_nubert_0.png",
      "/sprites/deltarune/ch2/nubert/spr_npc_nubert_1.png",
      "/sprites/deltarune/ch2/nubert/spr_npc_nubert_aristocrat_0.png",
      "/sprites/deltarune/ch2/nubert/spr_npc_nubert_aristocrat_1.png",
      "/sprites/deltarune/ch2/nubert/spr_npc_nubert_screen_0.png",
      "/sprites/deltarune/ch2/nubert/spr_npc_nubert_screen_1.png",
      "/sprites/deltarune/ch2/nubert/spr_npc_nubert_screen_2.png"
    ]
  },
  {
    "id": "nurse",
    "name": "Nurse",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/nurse/spr_npc_nurse_0.png",
      "/sprites/deltarune/ch1/nurse/spr_npc_nurse_1.png"
    ]
  },
  {
    "id": "oldman",
    "name": "Oldman",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch4"
    ],
    "sprites": [
      "/sprites/deltarune/ch4/oldman/spr_gerson_bench_paper_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_book_catch_2.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_bow_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_bow_1.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_dodge_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_hand_up_look_down_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_headtilt_nohair_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_idle_3.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_item_steal1_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_laugh_scene_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_look_diagonal_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_outfit_laugh_left_1.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_point_left_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_reach_down_1.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_rudebuster_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_rudebuster_13.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_sit_laugh_1.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_sit_look_2.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_smear_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_spin_5.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_swing_down_new_1.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_swing_down_new_4.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_switch_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_switch_1.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_tea_look_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_tea_pour_8.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_tea_pour_9.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_writing_loop_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_writing_scratch_aha_0.png",
      "/sprites/deltarune/ch4/oldman/spr_gerson_writing_scratch_loop_0.png"
    ]
  },
  {
    "id": "omawaroid",
    "name": "Omawaroid",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/omawaroid/spr_cutscene_26_omawaroid_0.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_chase_0.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_chase_1.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_chase_2.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_chase_3.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_hurt_0.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_idle_0.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_idle_1.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_idle_2.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_idle_3.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_idle_4.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_idle_5.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_spared_0.png",
      "/sprites/deltarune/ch2/omawaroid/spr_omawaroid_spotted_0.png"
    ]
  },
  {
    "id": "oni",
    "name": "Oni",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/oni/spr_npc_oni_0.png",
      "/sprites/Undertale/core/oni/spr_npc_oni_1.png"
    ]
  },
  {
    "id": "onionsan",
    "name": "Onionsan",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/onionsan/spr_onionsan_bright_0.png",
      "/sprites/Undertale/waterfall/onionsan/spr_onionsan_bright_1.png",
      "/sprites/Undertale/waterfall/onionsan/spr_onionsan_disappoint_0.png",
      "/sprites/Undertale/waterfall/onionsan/spr_onionsan_kawaii_0.png",
      "/sprites/Undertale/waterfall/onionsan/spr_onionsan_kawaii_1.png",
      "/sprites/Undertale/waterfall/onionsan/spr_onionsan_wistful_0.png",
      "/sprites/Undertale/waterfall/onionsan/spr_onionsan_yhear_0.png"
    ]
  },
  {
    "id": "orangefire",
    "name": "Orangefire",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/orangefire/spr_orangefire_0.png",
      "/sprites/Undertale/hotland/orangefire/spr_orangefire_1.png",
      "/sprites/Undertale/hotland/orangefire/spr_orangefire_2.png",
      "/sprites/Undertale/hotland/orangefire/spr_orangefire_3.png"
    ]
  },
  {
    "id": "papyrus",
    "name": "Papyrus",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyrus_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyruscool_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyruscry_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyrusdejected_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyrusevil_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyruslaugh_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyrusmad_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyrusside_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyrussweat_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_face_papyruswacky_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papface_fatal_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papface_wrap_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_paphead_believe_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_paphead_friendship_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_boneget_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_boneget_4.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_boneget_5.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_cape_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_cape_stark_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_d_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_d_mad_2.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_d_stark_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_dt_mad_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_dt_mad_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_electrocute_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_l_stark_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_mad1_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_mad1_2.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_orb_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrus_orbtoss_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrusboss_confuse_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrusboss_head_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_anime_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_blush_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_blush2_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_confident_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_mad_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_normal_2.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_sad_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_side_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_sweaty_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_0.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_1.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_2.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_3.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_4.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_5.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_6.png",
      "/sprites/Undertale/snowdin/papyrus/spr_papyrushead_variety_7.png",
      "/sprites/Undertale/snowdin/papyrus/spr_snowpap_0.png"
    ]
  },
  {
    "id": "parsnik",
    "name": "Parsnik",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/parsnik/spr_parsnik_hurt_0.png"
    ]
  },
  {
    "id": "photoshopflowey",
    "name": "Photoshopflowey",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_exface_0.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_7.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_8.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_9.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_everyone_0.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_everyone_8.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_everyone_9.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_seta_7.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_seta_8.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_setb_8.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_setc_6.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_setc_7.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_setc_8.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyface_setc_9.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyx_laugh_0.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyx_laugh_15.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyx_laugh_18.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyx_laugh_6.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyx_laugh_piss_4.png",
      "/sprites/Undertale/newhome/photoshopflowey/spr_tv_floweyx_laugh_piss_5.png"
    ]
  },
  {
    "id": "pippin",
    "name": "Pippin",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/pippin/spr_crowdpiece_0.png"
    ]
  },
  {
    "id": "plugboy",
    "name": "Plugboy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/plugboy/spr_cutscene_26_plugboy_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_1.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_bandana_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_bandana_1.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_girl_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_girl_1.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_hat_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_hat_1.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_shock_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_shock_1.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_static_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_static_1.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_static_outline_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_static_outline_1.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_wig_0.png",
      "/sprites/deltarune/ch2/plugboy/spr_npc_plugboy_wig_1.png"
    ]
  },
  {
    "id": "politicsbear",
    "name": "Politicsbear",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/politicsbear/spr_npc_bear_0.png",
      "/sprites/Undertale/snowdin/politicsbear/spr_npc_bear_1.png",
      "/sprites/Undertale/snowdin/politicsbear/spr_npc_politicsbear_0.png",
      "/sprites/Undertale/snowdin/politicsbear/spr_npc_politicsbear_1.png"
    ]
  },
  {
    "id": "ponman",
    "name": "Ponman",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/ponman/spr_ponman_appear_0.png",
      "/sprites/deltarune/ch1/ponman/spr_ponman_appear_2.png",
      "/sprites/deltarune/ch1/ponman/spr_ponman_appear_3.png",
      "/sprites/deltarune/ch1/ponman/spr_ponman_appear_4.png",
      "/sprites/deltarune/ch1/ponman/spr_ponman_idle_0.png"
    ]
  },
  {
    "id": "poppup",
    "name": "Poppup",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/poppup/spr_cutscene_26_poppup_0.png",
      "/sprites/deltarune/ch2/poppup/spr_npc_poppup_0.png",
      "/sprites/deltarune/ch2/poppup/spr_npc_poppup_1.png",
      "/sprites/deltarune/ch2/poppup/spr_npc_poppup_2.png",
      "/sprites/deltarune/ch2/poppup/spr_npc_poppup_3.png",
      "/sprites/deltarune/ch2/poppup/spr_npc_poppup_4.png",
      "/sprites/deltarune/ch2/poppup/spr_npc_poppup_5.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_hurt_0.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_0.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_1.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_2.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_3.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_4.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_5.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_alt_overworld_0.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_alt_overworld_1.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_alt_overworld_2.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_alt_overworld_3.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_alt_overworld_4.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_idle_alt_overworld_5.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_10.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_3.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_4.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_5.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_6.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_7.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_8.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_intro_9.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_shrivel_idle_0.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_shrivel_idle_1.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_shrivel_idle_2.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_shrivel_idle_3.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_shrivel_idle_4.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_shrivel_idle_5.png",
      "/sprites/deltarune/ch2/poppup/spr_poppup_spared_0.png"
    ]
  },
  {
    "id": "punkhamster",
    "name": "Punkhamster",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/punkhamster/spr_punkhamster_0.png",
      "/sprites/Undertale/snowdin/punkhamster/spr_punkhamster_1.png"
    ]
  },
  {
    "id": "puzzlepiece",
    "name": "Puzzlepiece",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_jail_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shaved_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shaved_frown_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shaved_frown_1.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shaved_happy_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shaved_happy_1.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock1_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock1_shaved_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock1_shaved_1.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_2.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_3.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_shaved_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_shaved_1.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_shaved_2.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_shaved_3.png"
    ]
  },
  {
    "id": "pyrope",
    "name": "Pyrope",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/pyrope/spr_pyropehurt_0.png",
      "/sprites/Undertale/hotland/pyrope/spr_pyropenpc_0.png",
      "/sprites/Undertale/hotland/pyrope/spr_pyropenpc_1.png"
    ]
  },
  {
    "id": "queen",
    "name": "Queen",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/queen/spr_cutscene_10_queen_armup_7.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_10_queen_ohoho_standing_0.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_13_queen_drunk_laugh_0.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_13_queen_drunk_smash_0.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_15_queen_baseball_0.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_26_queen_climb_0.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_26_queen_pilot_0.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_26_queen_pilot_laugh_1.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_city01_queen_shocked_0.png",
      "/sprites/deltarune/ch2/queen/spr_cutscene_city01_queen_stealth_0.png",
      "/sprites/deltarune/ch2/queen/spr_npc_queen_relax_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_chair_1_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_chair_2_4.png",
      "/sprites/deltarune/ch2/queen/spr_queen_chair_ohoho_1_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_chair_ohoho_2_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_down_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_drunk_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_hurt_3.png",
      "/sprites/deltarune/ch2/queen/spr_queen_pie_left_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_pie_throw_3.png",
      "/sprites/deltarune/ch2/queen/spr_queen_point_left_1.png",
      "/sprites/deltarune/ch2/queen/spr_queen_run_right_stupid_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_run_right_stupid_1.png",
      "/sprites/deltarune/ch2/queen/spr_queen_run_right_stupid_3.png",
      "/sprites/deltarune/ch2/queen/spr_queen_walk_left_0.png",
      "/sprites/deltarune/ch2/queen/spr_queen_wine_left_0.png"
    ]
  },
  {
    "id": "rabbick",
    "name": "Rabbick",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/rabbick/spr_rabbick_enemy_0.png",
      "/sprites/deltarune/ch1/rabbick/spr_rabbick_enemy_hurt_0.png",
      "/sprites/deltarune/ch1/rabbick/spr_rabbick_enemy_hurt_1.png",
      "/sprites/deltarune/ch1/rabbick/spr_rabbick_enemy_overworld_0.png",
      "/sprites/deltarune/ch1/rabbick/spr_rabbick_enemy_spared_0.png"
    ]
  },
  {
    "id": "rabbitgirl",
    "name": "Rabbitgirl",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/rabbitgirl/spr_npc_bunbun_0.png",
      "/sprites/Undertale/snowdin/rabbitgirl/spr_npc_bunbun_1.png"
    ]
  },
  {
    "id": "rabbitkid",
    "name": "Rabbitkid",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/rabbitkid/spr_npc_rabbitkid_0.png",
      "/sprites/Undertale/snowdin/rabbitkid/spr_npc_rabbitkid_1.png"
    ]
  },
  {
    "id": "rainykid",
    "name": "Rainykid",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/rainykid/spr_npc_rainykid_0.png",
      "/sprites/deltarune/ch2/rainykid/spr_npc_rainykid_1.png"
    ]
  },
  {
    "id": "ralsei",
    "name": "Ralsei",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/ralsei/spr_cutscene_24e_ralsei_splat_happy_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_cutscene_24e_ralsei_splat_mad_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_10.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_11.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_12.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_5.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_6.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_7.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_8.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_dark_9.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_hood_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_hood_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_nohat_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_nohat_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_face_r_nohat_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_npc_jackenstein_climb_party_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_coaster_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_cotton_talk_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_cotton_talk_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_5.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_6.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance_7.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_dance2_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_down_surprised2_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_fell_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_hatless_throw_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_hood_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_jump_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_laugh_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_laugh_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_left_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_pose_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_pullhat_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_removehood_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_removehood_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_removehood_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_removehood_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_removehood_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_reveal_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_reveal_10.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_reveal_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_reveal_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_reveal_8.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_right_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_roll_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_roll_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_roll_smear_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_shock_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_shocked_behind_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_slide_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_slide_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_slide_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_surprised_down_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_blush_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_blush_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_blush_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_blush_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_sleep_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_sleep_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_unhappy_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_unhappy_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_unhappy_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_down_unhappy_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_blush_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_blush_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_blush_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_blush_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_unhappy_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_unhappy_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_unhappy_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_left_unhappy_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_blush_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_blush_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_blush_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_blush_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_unhappy_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_unhappy_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_unhappy_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_walk_right_unhappy_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_wave_down_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_wave_down_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_wave_down_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_wave_down_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_wave_start_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_wave_start_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_wave_start_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_act_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_attack_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_attack_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_attackready_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_battleintro_6.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_bow_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_defend_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_defend_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_idle_enemy_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_idle_enemy_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_idle_enemy_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_idle_enemy_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_idle_enemy_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_idle_enemy_blush_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_item_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_shock_enemy_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_sing_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_spell_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_spellready_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_victory_12.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_victory_2.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_yarn_1_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_yarn_2_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_susieb_throwralseiready_0.png"
    ]
  },
  {
    "id": "ralseidummy",
    "name": "Ralseidummy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/ralseidummy/spr_dummymonster_0.png"
    ]
  },
  {
    "id": "reaperbird",
    "name": "Reaperbird",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/reaperbird/spr_amalgam_exc_11.png",
      "/sprites/Undertale/truelab/reaperbird/spr_amalgam_exc_3.png",
      "/sprites/Undertale/truelab/reaperbird/spr_reaperbird_head_0.png",
      "/sprites/Undertale/truelab/reaperbird/spr_reaperbird_head_1.png",
      "/sprites/Undertale/truelab/reaperbird/spr_reaperbird_head_2.png",
      "/sprites/Undertale/truelab/reaperbird/spr_reaperbird_head_3.png",
      "/sprites/Undertale/truelab/reaperbird/spr_reaperbird_head_4.png",
      "/sprites/Undertale/truelab/reaperbird/spr_reaperbird_head_5.png",
      "/sprites/Undertale/truelab/reaperbird/spr_reaperbird_head_6.png"
    ]
  },
  {
    "id": "redacted",
    "name": "Redacted",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/redacted/spr_redacted_0.png"
    ]
  },
  {
    "id": "redbird",
    "name": "Redbird",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/redbird/spr_npc_redbird_0.png",
      "/sprites/Undertale/snowdin/redbird/spr_npc_redbird_1.png"
    ]
  },
  {
    "id": "reddemon",
    "name": "Reddemon",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/reddemon/spr_npc_reddemon_0.png",
      "/sprites/Undertale/snowdin/reddemon/spr_npc_reddemon_1.png"
    ]
  },
  {
    "id": "riverman",
    "name": "Riverman",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/riverman/spr_riverman_0.png",
      "/sprites/Undertale/waterfall/riverman/spr_riverman_1.png",
      "/sprites/Undertale/waterfall/riverman/spr_riverman_2.png",
      "/sprites/Undertale/waterfall/riverman/spr_riverman_3.png"
    ]
  },
  {
    "id": "roaringknight",
    "name": "Roaringknight",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch3"
    ],
    "sprites": [
      "/sprites/deltarune/ch3/roaringknight/spr_roaring_knight_clash_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaring_knight_laugh_stop_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaring_knight_overworld_warp_7.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_attack_ol_center_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_attack_ol_center_1.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_attack_ol_center_4.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_ball_transition_down_2.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_ball_transition_pose_2.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_ball_transition_pose_3.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_block_ol_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_down_look_forward_4.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_droop_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_faceaway_eye_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_fly_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_front_flourish_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_front_flourish_1.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_front_flourish_2.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_front_flourish_5.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_front_slash_1.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_front_slash_4.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_lift_head_3.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_look_down_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_noarm_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_pose_ol_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_reach_overworld_sword_2.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_slosh_sword_8.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_teleport_post_0.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_throw_sword_15.png",
      "/sprites/deltarune/ch3/roaringknight/spr_roaringknight_turn_around_2.png"
    ]
  },
  {
    "id": "rock",
    "name": "Rock",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/rock/spr_rock_0.png"
    ]
  },
  {
    "id": "roulx",
    "name": "Roulx",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/roulx/spr_board_rouxls_0.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_0.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_1.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_2.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_3.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_4.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_5.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_6.png",
      "/sprites/deltarune/ch1/roulx/spr_npc_rouxls_chef_up_1.png",
      "/sprites/deltarune/ch1/roulx/spr_npc_rouxls_cry_0.png",
      "/sprites/deltarune/ch1/roulx/spr_npc_rouxls_lamp_0.png",
      "/sprites/deltarune/ch1/roulx/spr_npc_rouxls_lamp_1.png",
      "/sprites/deltarune/ch1/roulx/spr_npc_rouxls_up_1.png",
      "/sprites/deltarune/ch1/roulx/spr_npc_rouxls_weather_gaming_chef_0.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_armposes_0.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_armposes_1.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_armposes_2.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_armposes_3.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_chef_card2_3.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_chef_dance_2.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_handposes_0.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_handposes_1.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_hugfriends_0.png",
      "/sprites/deltarune/ch1/roulx/spr_rouxls_hugfriends_5.png",
      "/sprites/deltarune/ch1/roulx/spr_rurus_appear_8.png"
    ]
  },
  {
    "id": "royalguard",
    "name": "Royalguard",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/royalguard/spr_barahead1_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_barahead2_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_barahead3_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_barahead4_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_npc_rgbun_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_npc_rgbun_1.png",
      "/sprites/Undertale/hotland/royalguard/spr_npc_rgdragon_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_npc_rgdragon_1.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_d_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_l_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_l_1.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_l_2.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_l_3.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_r_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_r_1.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_r_2.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_dragon_r_3.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_d_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_l_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_l_1.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_l_2.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_l_3.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_r_0.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_r_1.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_r_2.png",
      "/sprites/Undertale/hotland/royalguard/spr_royalguard_rabbit_r_3.png"
    ]
  },
  {
    "id": "rudin",
    "name": "Rudin",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/rudin/spr_bakesale_rudinn_0.png",
      "/sprites/deltarune/ch1/rudin/spr_bakesale_rudinn_1.png",
      "/sprites/deltarune/ch1/rudin/spr_crowdpiece_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamond_fan_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamond_fan_1.png",
      "/sprites/deltarune/ch1/rudin/spr_diamond_overworld_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamond_overworld_1.png",
      "/sprites/deltarune/ch1/rudin/spr_diamond_overworld_sleepy1_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamond_overworld_sleepy2_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_hurt_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_idle_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_idle_1.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_idle_2.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_idle_3.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_spared_0.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_spared_1.png",
      "/sprites/deltarune/ch1/rudin/spr_diamondm_spared_2.png"
    ]
  },
  {
    "id": "rudinknight",
    "name": "Rudinknight",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/rudinknight/spr_daimond_knight_idle_0.png",
      "/sprites/deltarune/ch1/rudinknight/spr_diamond_knight_slash_1.png",
      "/sprites/deltarune/ch1/rudinknight/spr_diamond_knight_slash_2.png",
      "/sprites/deltarune/ch1/rudinknight/spr_diamond_knight_slash_3.png",
      "/sprites/deltarune/ch1/rudinknight/spr_diamond_knight_slash_4.png",
      "/sprites/deltarune/ch1/rudinknight/spr_diamond_knight_slash_5.png",
      "/sprites/deltarune/ch1/rudinknight/spr_diamond_knight_spared_3.png"
    ]
  },
  {
    "id": "rudy",
    "name": "Rudy",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_0.png",
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_1.png",
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_2.png",
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_3.png",
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_4.png",
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_5.png",
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_6.png",
      "/sprites/deltarune/ch1/rudy/spr_face_rudy_7.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_cough_0.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_cough_1.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_cough_2.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_cough_3.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_d_0.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_l_0.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_laugh_0.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_laugh_1.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_look_0.png",
      "/sprites/deltarune/ch1/rudy/spr_rudy_look_smile_0.png"
    ]
  },
  {
    "id": "saddragon",
    "name": "Saddragon",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/saddragon/spr_npc_dragonfamily_0.png",
      "/sprites/Undertale/core/saddragon/spr_npc_dragonfamily_1.png",
      "/sprites/Undertale/core/saddragon/spr_saddragon_0.png",
      "/sprites/Undertale/core/saddragon/spr_saddragon_1.png"
    ]
  },
  {
    "id": "sans",
    "name": "Sans",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_1.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_2.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_3.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_4.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_5.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_6.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_7.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_8.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_bface_9.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_d_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_dangerous_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_icecream_1_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_laugh_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_r_darkhand_2.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_shrug1_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_shrug2_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_sleep_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_stool_buttscratch_1.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_stool_chup_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_stool_chup_1.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_stool_chup_7.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_stool_chup_9.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_stoolcomb_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_trike_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_trike_wink_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sans_trombone_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_blueeye_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_blueeye_1.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_face_10.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_face_11.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_face_12.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_face_13.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_face_14.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_face_6.png",
      "/sprites/Undertale/snowdin/sans/spr_sansb_face_8.png",
      "/sprites/Undertale/snowdin/sans/spr_sanswrapface_0.png",
      "/sprites/Undertale/snowdin/sans/spr_sanswrapface_1.png",
      "/sprites/Undertale/snowdin/sans/spr_snowsans_0.png",
      "/sprites/Undertale/snowdin/sans/sprite1059_0.png"
    ]
  },
  {
    "id": "scarfmouse",
    "name": "Scarfmouse",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/scarfmouse/spr_npc_wrapmouse_0.png"
    ]
  },
  {
    "id": "scissordancer",
    "name": "Scissordancer",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_10.png",
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_11.png",
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_5.png",
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_6.png",
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_7.png",
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_8.png",
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_9.png",
      "/sprites/deltarune/ch1/scissordancer/spr_scissordancer_precise_0.png"
    ]
  },
  {
    "id": "seam",
    "name": "Seam",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/seam/spr_seam_idle_0.png",
      "/sprites/deltarune/ch1/seam/spr_seam_impatient_0.png",
      "/sprites/deltarune/ch1/seam/spr_seam_laugh_0.png",
      "/sprites/deltarune/ch1/seam/spr_seam_oh_0.png"
    ]
  },
  {
    "id": "shamblingmass",
    "name": "Shamblingmass",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/shamblingmass/spr_shamblingmass_0.png",
      "/sprites/Undertale/core/shamblingmass/spr_shamblingmass_1.png",
      "/sprites/Undertale/core/shamblingmass/spr_shamblingmass_2.png"
    ]
  },
  {
    "id": "shopcafe",
    "name": "Shopcafe",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/shopcafe/spr_shop_cafe_swatch_0.png",
      "/sprites/deltarune/ch2/shopcafe/spr_shop_cafe_swatch_1.png",
      "/sprites/deltarune/ch2/shopcafe/spr_shop_cafe_swatch_2.png",
      "/sprites/deltarune/ch2/shopcafe/spr_shop_cafe_swatch_3.png",
      "/sprites/deltarune/ch2/shopcafe/spr_shop_cafe_swatch_4.png"
    ]
  },
  {
    "id": "shopkeeper",
    "name": "Shopkeeper",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/shopkeeper/spr_npc_qc_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_npc_qc_1.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_npc_qc_stand_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_npc_qc_wave_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_npc_qc_wave_1.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_shopkeeper1_face0_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_shopkeeper1_face1_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_shopkeeper1_face2_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_shopkeeper1_face3_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_shopkeeper1_face4_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_shopkeeper1_face5_0.png",
      "/sprites/Undertale/snowdin/shopkeeper/spr_shopkeeper1_face6_0.png"
    ]
  },
  {
    "id": "shyren",
    "name": "Shyren",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/shyren/spr_shyren_overworld_0.png",
      "/sprites/Undertale/waterfall/shyren/spr_shyren_overworld_1.png",
      "/sprites/Undertale/waterfall/shyren/spr_shyren_overworld_sing_0.png",
      "/sprites/Undertale/waterfall/shyren/spr_shyren_overworld_sing_1.png",
      "/sprites/Undertale/waterfall/shyren/spr_shyren_sing_0.png",
      "/sprites/Undertale/waterfall/shyren/spr_shyren_sing_2.png",
      "/sprites/Undertale/waterfall/shyren/spr_shyren_swim_0.png"
    ]
  },
  {
    "id": "skateboardgirl",
    "name": "Skateboardgirl",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/skateboardgirl/spr_npc_flanneldemon_0.png",
      "/sprites/Undertale/hotland/skateboardgirl/spr_npc_flanneldemon_1.png",
      "/sprites/Undertale/hotland/skateboardgirl/spr_skateboardgirl_0.png",
      "/sprites/Undertale/hotland/skateboardgirl/spr_skateboardgirl_1.png"
    ]
  },
  {
    "id": "slimes",
    "name": "Slimes",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/slimes/spr_npc_dadslime_0.png",
      "/sprites/Undertale/snowdin/slimes/spr_npc_kidslime1_1.png",
      "/sprites/Undertale/snowdin/slimes/spr_npc_kidslime2_0.png"
    ]
  },
  {
    "id": "smallbird",
    "name": "Smallbird",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/smallbird/spr_smallbird_0.png",
      "/sprites/Undertale/waterfall/smallbird/spr_smallbird_cry_0.png",
      "/sprites/Undertale/waterfall/smallbird/spr_smallbird_cry_1.png",
      "/sprites/Undertale/waterfall/smallbird/spr_smallbird_fly_0.png",
      "/sprites/Undertale/waterfall/smallbird/spr_smallbird_fly_1.png"
    ]
  },
  {
    "id": "snails",
    "name": "Snails",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/snails/spr_longsnail_0.png",
      "/sprites/Undertale/waterfall/snails/spr_longsnail_1.png",
      "/sprites/Undertale/waterfall/snails/spr_npc_snailcar_0.png",
      "/sprites/Undertale/waterfall/snails/spr_npc_snailcar_1.png",
      "/sprites/Undertale/waterfall/snails/spr_snail_0.png",
      "/sprites/Undertale/waterfall/snails/spr_snailblue_0.png",
      "/sprites/Undertale/waterfall/snails/spr_snailguy_0.png",
      "/sprites/Undertale/waterfall/snails/spr_snailguy_1.png",
      "/sprites/Undertale/waterfall/snails/spr_snailr_0.png",
      "/sprites/Undertale/waterfall/snails/spr_snailred_0.png",
      "/sprites/Undertale/waterfall/snails/spr_snailyellow_0.png",
      "/sprites/Undertale/waterfall/snails/spr_snailyellow_hopeless3_0.png",
      "/sprites/Undertale/waterfall/snails/spr_snailyellow_hopeless3_1.png",
      "/sprites/Undertale/waterfall/snails/spr_snailyellow_hopeless3_2.png",
      "/sprites/Undertale/waterfall/snails/spr_snailyellow_hopeless3_3.png"
    ]
  },
  {
    "id": "snowdrake",
    "name": "Snowdrake",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/snowdrake/spr_snowdrake_head_0.png",
      "/sprites/Undertale/snowdin/snowdrake/spr_snowdrakenpc_0.png",
      "/sprites/Undertale/snowdin/snowdrake/spr_snowdrakenpc_1.png",
      "/sprites/Undertale/snowdin/snowdrake/spr_snowy_ut_l_0.png",
      "/sprites/Undertale/snowdin/snowdrake/spr_snowy_ut_r_0.png"
    ]
  },
  {
    "id": "snowdrakefather",
    "name": "Snowdrakefather",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/snowdrakefather/spr_snowdrakedad_0.png",
      "/sprites/Undertale/core/snowdrakefather/spr_snowdrakedad_1.png"
    ]
  },
  {
    "id": "snowdrakemom",
    "name": "Snowdrakemom",
    "games": [
      "undertale"
    ],
    "zones": [
      "truelab"
    ],
    "sprites": [
      "/sprites/Undertale/truelab/snowdrakemom/spr_amalgam_fridgenpc_1.png",
      "/sprites/Undertale/truelab/snowdrakemom/spr_snowdrakesmom_0.png",
      "/sprites/Undertale/truelab/snowdrakemom/spr_snowdrakesmom_1.png",
      "/sprites/Undertale/truelab/snowdrakemom/spr_snowdrakesmom_2.png",
      "/sprites/Undertale/truelab/snowdrakemom/spr_snowdrakesmom_3.png"
    ]
  },
  {
    "id": "snowman",
    "name": "Snowman",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/snowman/spr_fashionsnowman_0.png",
      "/sprites/Undertale/snowdin/snowman/spr_sadsnowman_0.png",
      "/sprites/Undertale/snowdin/snowman/spr_sadsnowman_d1_0.png",
      "/sprites/Undertale/snowdin/snowman/spr_sadsnowman_d1_1.png"
    ]
  },
  {
    "id": "sosorry",
    "name": "Sosorry",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/sosorry/spr_sorry_d_0.png",
      "/sprites/Undertale/hotland/sosorry/spr_sorry_example_0.png",
      "/sprites/Undertale/hotland/sosorry/spr_sorry_u_0.png"
    ]
  },
  {
    "id": "souls",
    "name": "Souls",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/souls/spr_allsoul_0.png",
      "/sprites/Undertale/newhome/souls/spr_allsoul_1.png",
      "/sprites/Undertale/newhome/souls/spr_allsoul_2.png",
      "/sprites/Undertale/newhome/souls/spr_allsoul_3.png",
      "/sprites/Undertale/newhome/souls/spr_allsoul_4.png",
      "/sprites/Undertale/newhome/souls/spr_allsoul_5.png",
      "/sprites/Undertale/newhome/souls/spr_heart_0.png"
    ]
  },
  {
    "id": "spamton",
    "name": "Spamton",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/spamton/spr_cutscene_14_spamton_hands_look_down_0.png",
      "/sprites/deltarune/ch2/spamton/spr_cutscene_14_spamton_laugh_glitch_1.png",
      "/sprites/deltarune/ch2/spamton/spr_cutscene_14_spamton_laugh_glitch_15.png",
      "/sprites/deltarune/ch2/spamton/spr_cutscene_14_spamton_laugh_glitch_18.png",
      "/sprites/deltarune/ch2/spamton/spr_cutscene_14_spamton_laugh_glitch_19.png",
      "/sprites/deltarune/ch2/spamton/spr_cutscene_14_spamton_laugh_glitch_20.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_soamton_phone_4.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton0_0.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton1_0.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton1_2.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton1_3.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton2_0.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton2_1.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton3_0.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton4_0.png",
      "/sprites/deltarune/ch2/spamton/spr_shop_spamton4_3.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_cherub_4.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_dark_0.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_foam_1.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_foam_2.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_foam_4.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_head_grow_4.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_hurt_0.png",
      "/sprites/deltarune/ch2/spamton/spr_spamton_jump_1.png",
      "/sprites/deltarune/ch2/spamton/spr_spamtonhead_0.png",
      "/sprites/deltarune/ch2/spamton/spr_spamtonhead_1.png",
      "/sprites/deltarune/ch2/spamton/spr_spamtonhead_2.png",
      "/sprites/deltarune/ch2/spamton/spr_spamtonhead_3.png"
    ]
  },
  {
    "id": "spamtonneo",
    "name": "Spamtonneo",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/spamtonneo/spr_sneo_example_0.png",
      "/sprites/deltarune/ch2/spamtonneo/spr_sneo_final_forme_0.png",
      "/sprites/deltarune/ch2/spamtonneo/spr_sneo_head_1.png",
      "/sprites/deltarune/ch2/spamtonneo/spr_sneo_head_2.png",
      "/sprites/deltarune/ch2/spamtonneo/spr_sneo_head_3.png",
      "/sprites/deltarune/ch2/spamtonneo/spr_sneo_head_open_0.png",
      "/sprites/deltarune/ch2/spamtonneo/spr_sneo_lastattack_head_top_0.png"
    ]
  },
  {
    "id": "starwalker",
    "name": "Starwalker",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_0.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_0.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_1.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_2.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_3.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_4.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_5.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_6.png",
      "/sprites/deltarune/ch1/starwalker/spr_npc_originalstarwalker_walk_down_7.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_attack_0.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_attack_1.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_idle_0.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_idle_1.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_idle_2.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_idle_3.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_walk_0.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_walk_1.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_walk_2.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_walk_3.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_walk_4.png",
      "/sprites/deltarune/ch1/starwalker/spr_starwalker_walk_5.png"
    ]
  },
  {
    "id": "statue",
    "name": "Statue",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/statue/spr_statue_0.png",
      "/sprites/Undertale/waterfall/statue/spr_statue_1.png"
    ]
  },
  {
    "id": "susie",
    "name": "Susie",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/susie/spr_cutscene_28b_susie_angry_down_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_28b_susie_angry_down_lw_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_28b_susie_turn_around_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_28b_susie_turn_around_lw_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_playful_punch_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_playful_punch_1.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_playful_punch2_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_1.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_2.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_3.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_4.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_walk_0.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_walk_1.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_walk_2.png",
      "/sprites/deltarune/ch1/susie/spr_cutscene_30b_susie_unslouch_walk_3.png",
      "/sprites/deltarune/ch1/susie/spr_face_s0_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s1_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s2_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s3_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s4_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s5_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s6_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s7_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s8_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_s9_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_sA_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_sB_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_sB_1.png",
      "/sprites/deltarune/ch1/susie/spr_face_sC_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_sD_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_0.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_1.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_2.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_3.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_4.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_5.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_6.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_7.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_8.png",
      "/sprites/deltarune/ch1/susie/spr_face_susie_alt_9.png",
      "/sprites/deltarune/ch1/susie/spr_krisandsusie_fall_0.png",
      "/sprites/deltarune/ch1/susie/spr_lancerbike_earcover_0.png",
      "/sprites/deltarune/ch1/susie/spr_npc_jackenstein_climb_party_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_brave_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_brave_discouraged_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_brave_shock_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_chomp_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_chomp_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_coaster_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dance_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dance_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dance_2.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dance_3.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dance_4.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dance_5.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dark_relax_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_down_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_eatchalk_14.png",
      "/sprites/deltarune/ch1/susie/spr_susie_eatchalk_15.png",
      "/sprites/deltarune/ch1/susie/spr_susie_eatchalk_16.png",
      "/sprites/deltarune/ch1/susie/spr_susie_eatchalk_17.png",
      "/sprites/deltarune/ch1/susie/spr_susie_enemy_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_enemy_defeat_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_enemy_hurt_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_fall_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_fell_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_finelancer_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_grablancer_7.png",
      "/sprites/deltarune/ch1/susie/spr_susie_grablancer_8.png",
      "/sprites/deltarune/ch1/susie/spr_susie_grabsmile_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_grabsmile_4.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisdrop_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisgrab_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisgrab_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisgrab_3.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisgrab_5.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisgrab_eat_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisgrab_eat_6.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisshoulder_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisshoulder_5.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisshoulder_r_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_krisshoulder_r_5.png",
      "/sprites/deltarune/ch1/susie/spr_susie_lancer_carry_laugh_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_lancer_carry_laugh_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_laughlancer_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_left_diagonal_kick_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_left_diagonal_kick_dw_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_left_diagonal_kick_dw_2.png",
      "/sprites/deltarune/ch1/susie/spr_susie_left_diagonal_kick_dw_3.png",
      "/sprites/deltarune/ch1/susie/spr_susie_left_diagonal_kick_dw_4.png",
      "/sprites/deltarune/ch1/susie/spr_susie_left_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_playful_punch_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_playful_punch_dw_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_pose_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_right_diagonal_kick_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_right_diagonal_kick_dw_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_right_diagonal_kick_dw_2.png",
      "/sprites/deltarune/ch1/susie/spr_susie_right_diagonal_kick_dw_3.png",
      "/sprites/deltarune/ch1/susie/spr_susie_right_diagonal_kick_dw_4.png",
      "/sprites/deltarune/ch1/susie/spr_susie_right_dw_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_shock_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_slide_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_slide_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_slide_2.png",
      "/sprites/deltarune/ch1/susie/spr_susie_walk_back_arm_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_walk_back_arm_1.png",
      "/sprites/deltarune/ch1/susie/spr_susie_walk_back_arm_2.png",
      "/sprites/deltarune/ch1/susie/spr_susie_walk_back_arm_3.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_act_0.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_act_2.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_attack_1.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_attack_2.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_attackready_0.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_defend_0.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_defend_4.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_idle_serious_0.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_idle_unarmed_2.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_spell_1.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_spellready_0.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_throwralseiready_0.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_victory_14.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_victory_15.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_victory_17.png",
      "/sprites/deltarune/ch1/susie/spr_susieb_victory_3.png",
      "/sprites/deltarune/ch1/susie/spr_susied_dark_unhappy_0.png",
      "/sprites/deltarune/ch1/susie/spr_susied_eye_dark_0.png",
      "/sprites/deltarune/ch1/susie/spr_susied_eyes_0.png",
      "/sprites/deltarune/ch1/susie/spr_susied_party_0.png",
      "/sprites/deltarune/ch1/susie/spr_susiel_dark_laugh_0.png",
      "/sprites/deltarune/ch1/susie/spr_susiel_dark_laugh_1.png",
      "/sprites/deltarune/ch1/susie/spr_susiel_eye_dark_0.png",
      "/sprites/deltarune/ch1/susie/spr_susiel_eye_dark_1.png",
      "/sprites/deltarune/ch1/susie/spr_susiel_party_0.png",
      "/sprites/deltarune/ch1/susie/spr_susier_kneel_0.png",
      "/sprites/deltarune/ch1/susie/spr_susier_wall_0.png"
    ]
  },
  {
    "id": "swatchling",
    "name": "Swatchling",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/swatchling/spr_cutscene_26_butler_0.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_butler_0.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_butler_1.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_butler_clap_0.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_butler_clap_1.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_butler_platter_0.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_0.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_1.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_2.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_3.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_walk_0.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_walk_1.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_walk_2.png",
      "/sprites/deltarune/ch2/swatchling/spr_npc_swatchling_sweep_walk_3.png"
    ]
  },
  {
    "id": "sweet",
    "name": "Sweet",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/sweet/spr_cutscene_cyber01_sweet_splat_0.png",
      "/sprites/deltarune/ch2/sweet/spr_npc_sweet_0.png",
      "/sprites/deltarune/ch2/sweet/spr_npc_sweet_sing_0.png",
      "/sprites/deltarune/ch2/sweet/spr_npc_sweet_sing_1.png",
      "/sprites/deltarune/ch2/sweet/spr_sweet_dance_0.png",
      "/sprites/deltarune/ch2/sweet/spr_sweet_hurt_0.png",
      "/sprites/deltarune/ch2/sweet/spr_sweet_idle_0.png"
    ]
  },
  {
    "id": "tasque",
    "name": "Tasque",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/tasque/spr_cutscene_26_tasque_0.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_1.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_2.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_3.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_4.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_5.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_flipped_0.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_flipped_1.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_flipped_2.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_flipped_3.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_flipped_4.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_flipped_5.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_origin_bottom_center_0.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_origin_bottom_center_1.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_origin_bottom_center_2.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_origin_bottom_center_3.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_origin_bottom_center_4.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_origin_bottom_center_5.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_overworld_0.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_overworld_1.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_overworld_2.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_overworld_3.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_overworld_4.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_idle_overworld_5.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_meow_2.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_meow_3.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_meow_4.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_meow_5.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_meow_6.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_meow_7.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_meow_8.png",
      "/sprites/deltarune/ch2/tasque/spr_tasque_rev_0.png"
    ]
  },
  {
    "id": "tasquemanager",
    "name": "Tasquemanager",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/tasquemanager/spr_cutscene_26_tasquemanager_0.png",
      "/sprites/deltarune/ch2/tasquemanager/spr_npc_tm_sing_4.png",
      "/sprites/deltarune/ch2/tasquemanager/spr_tm_hurt_0.png"
    ]
  },
  {
    "id": "temmie",
    "name": "Temmie",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/temmie/spr_tem_eggput_3.png",
      "/sprites/Undertale/waterfall/temmie/spr_tem_eggput_5.png",
      "/sprites/Undertale/waterfall/temmie/spr_tem_sit_l_0.png",
      "/sprites/Undertale/waterfall/temmie/spr_tem_sit_l_1.png",
      "/sprites/Undertale/waterfall/temmie/spr_temmie_hive_0.png",
      "/sprites/Undertale/waterfall/temmie/spr_temmie_hive_1.png",
      "/sprites/Undertale/waterfall/temmie/spr_temmie_hive_2.png",
      "/sprites/Undertale/waterfall/temmie/spr_temmie_hive_3.png",
      "/sprites/Undertale/waterfall/temmie/spr_temmie_hivetalk_1.png",
      "/sprites/Undertale/waterfall/temmie/spr_temmie_r_1.png",
      "/sprites/Undertale/waterfall/temmie/spr_temmie_rt_1.png"
    ]
  },
  {
    "id": "tenna",
    "name": "Tenna",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch3"
    ],
    "sprites": [
      "/sprites/deltarune/ch3/tenna/spr_board_npc_tenna_back_0.png",
      "/sprites/deltarune/ch3/tenna/spr_gameshow_screen_tenna_peacefixedAnchor_0.png",
      "/sprites/deltarune/ch3/tenna/spr_gameshow_screen_tenna_peacefixedAnchor_1.png",
      "/sprites/deltarune/ch3/tenna/spr_gameshow_screen_tenna_run_0.png",
      "/sprites/deltarune/ch3/tenna/spr_gameshow_screen_tenna_run_1.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_armsup_annoyed_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_armsup_annoyed_1.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_bulletin_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_communication_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_communication_1.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_dance_cabbage_smol_34.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_dance_cabbage_smol_49.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_desperate_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_desperate_1.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_desperate_2.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_desperate_3.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_desperate_4.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_evil_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_faceaway_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_fall_start_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_fallen_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_grasp_b_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_grasp_c_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_grasp_d_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_grasp_e_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_hooray_armsup_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_hurt_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_laugh_pose_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_laugh_pose_alt_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_laugh_pose_teeth_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_listening_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_nose_blossom_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_point_at_screen_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_point_at_screen_c_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_point_droop_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_point_left_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_point_up_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_point_up_b_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_point_up_twofingers_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_headlowered_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_headlowered_nose_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_headraised_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_headraised_nose_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_1.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_2.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_3.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_4.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_evil_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_evil_1.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_evil_2.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_evil_3.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_pose_podium_evil_4.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_sad_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_sad_turned_a_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_sad_turned_b_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_salute_a_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_shocked_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_shocked_alt_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_spray_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_tie_adjust_a_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_tie_adjust_b_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_tie_adjust_c_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_whisper_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_whisper_blush_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tenna_whisper_chef_0.png",
      "/sprites/deltarune/ch3/tenna/spr_tennadeath_body_0.png"
    ]
  },
  {
    "id": "terry",
    "name": "Terry",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/terry/spr_npc_terry_0.png"
    ]
  },
  {
    "id": "titan",
    "name": "Titan",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch4"
    ],
    "sprites": [
      "/sprites/deltarune/ch4/titan/spr_cover_wings_defense_highlight2_0.png",
      "/sprites/deltarune/ch4/titan/spr_cover_wings_defense_layer_4_0.png",
      "/sprites/deltarune/ch4/titan/spr_titan_4_backwing_0.png",
      "/sprites/deltarune/ch4/titan/spr_titan_hurt_0.png",
      "/sprites/deltarune/ch4/titan/spr_titan_hurt_2.png"
    ]
  },
  {
    "id": "tobyfox",
    "name": "Tobyfox",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/tobyfox/spr_dogshrine_dog_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_dogshrine_dog_sleep_1.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_dtrapdog_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_sleepdog_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdog_sleep_firebattle_1.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdog_spring_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdog_summer_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdog_winter_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdogl_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdogl_fire_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdogl_talk_1.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdogl_talk_eyeclose_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobdogl_talk_eyeclose_1.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobydogeat_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobydogscoot_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobydogsurprise_0.png",
      "/sprites/Undertale/snowdin/tobyfox/spr_tobydogsurprise_1.png"
    ]
  },
  {
    "id": "topchef",
    "name": "Topchef",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/topchef/spr_topchef_0.png",
      "/sprites/deltarune/ch1/topchef/spr_topchef_7.png"
    ]
  },
  {
    "id": "toriel",
    "name": "Toriel",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/toriel/spr_chairiel_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_cutscene_30b_toriel_facepalm_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_cutscene_30b_toriel_laugh_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_cutscene_30b_toriel_laugh_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_toriel_goawayasgore_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_toriel_laughleft_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_toriel_noasgore_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielblink_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielblink_2.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielblinkside_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielblinkside_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielblinkside_2.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielcold_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielcold_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torieldie_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torieldreamworks_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielembarrassed_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielencourage_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielencourage_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielhappy_down_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielhappy_left_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielhappy_right_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielhappyblink_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielhappyblink_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielhappyblink_2.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_toriellaugh_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_toriellaugh_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielmad_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielmad_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielpain_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielrevenge_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielrevengetalk_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielscared_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielscared_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielsigh_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielsurprised_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torieltalkside_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torieltalkside_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielup_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielwhat_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_face_torielwhatside_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_d_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_d_phone_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_dt_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_dtmad_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_dtmad_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_handhold_d_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_handhold_r_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_hug_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_hug_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_hug_2.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_r_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_r_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_toriel_school_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_kneel_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_kneel_incredulous_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_kneelanguish_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_kneelanguish2_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_kneelsmile_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_mouthcover_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_murdered_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_murdered_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_neutral_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_sad2_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_sadhappy_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_sadhappy_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielboss_side_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torieldisapprove_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torieldisapprove_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielside1_0.png",
      "/sprites/Undertale/ruinas/toriel/spr_torielside1_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_torweird_1.png",
      "/sprites/Undertale/ruinas/toriel/spr_torweird_2.png",
      "/sprites/Undertale/ruinas/toriel/spr_torweird_3.png",
      "/sprites/Undertale/ruinas/toriel/spr_torweird_4.png",
      "/sprites/Undertale/ruinas/toriel/sprite65_0.png"
    ]
  },
  {
    "id": "tsundereplane",
    "name": "Tsundereplane",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/tsundereplane/spr_tsundereplane_1.png",
      "/sprites/Undertale/hotland/tsundereplane/spr_tsunderplane_0.png",
      "/sprites/Undertale/hotland/tsundereplane/spr_tsunderplanenpc_0.png",
      "/sprites/Undertale/hotland/tsundereplane/spr_tsunderplanenpc_1.png"
    ]
  },
  {
    "id": "tvinside",
    "name": "Tvinside",
    "games": [
      "undertale"
    ],
    "zones": [
      "newhome"
    ],
    "sprites": [
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_0.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_0.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_1.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_10.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_11.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_12.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_13.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_14.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_15.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_16.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_17.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_18.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_19.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_2.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_20.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_21.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_22.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_23.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_24.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_25.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_26.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_27.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_28.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_29.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_3.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_30.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_31.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_32.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_33.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_34.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_35.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_36.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_4.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_5.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_6.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_7.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_8.png",
      "/sprites/Undertale/newhome/tvinside/spr_tvinside_old_9.png"
    ]
  },
  {
    "id": "uglyfish",
    "name": "Uglyfish",
    "games": [
      "undertale"
    ],
    "zones": [
      "snowdin"
    ],
    "sprites": [
      "/sprites/Undertale/snowdin/uglyfish/spr_npc_uglyfish_0.png",
      "/sprites/Undertale/snowdin/uglyfish/spr_npc_uglyfish_1.png"
    ]
  },
  {
    "id": "undyne",
    "name": "Undyne",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_2_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_2_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_2_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_2_4.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_4.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_5.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_7.png",
      "/sprites/Undertale/waterfall/undyne/spr_adate_uface_8.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_4.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_5.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_6.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne_7.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne0_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne1_3_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne1A_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne2_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne3_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne4_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne6_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne7_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne7A_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne8_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne8A_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne9_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne9_2_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne9_3_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne9_3_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_face_undyne9_B_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_ua_hold_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_ua_lift1_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_ua_lift2_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_ua_pet_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_ua_pet_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_ua_throw_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_armraise_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_besties_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_cheektug_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_d_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_d_wave_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_d_wave_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_dt_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_exasperated_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_exasperated_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_eyeding_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_eyeding_4.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_grableap_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_grableap_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_grableap_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_helmet_d_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_helmet_d_pissed_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_jump1_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_kick_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_lt_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_polite_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_rt_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_rush_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_starkd_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_starkd_nomask_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_stomp_12.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_stomp_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_stomp_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_stomp_4.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_throw_12.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_throw_7.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_throwspear_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_down_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_down_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_down_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_down_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_left_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_left_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_left_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_left_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_right_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_right_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_right_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_walk_right_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyne_youremine_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undynea_r_raiseup_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undynea_rfall_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undynea_starkr_old_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_2.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_face3_14.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_fatal_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_fatal_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_fatal_7.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_fatal_8.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_fatal_9.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_lastmelt_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_melt_3.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_smooch_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_smooch_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneb_smooch_s_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undynedive_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undynedive_1.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneface_encourage_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneface_fatal_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneface_wrap_0.png",
      "/sprites/Undertale/waterfall/undyne/spr_undyneface_wrap_1.png",
      "/sprites/Undertale/waterfall/undyne/sprite1135_0.png"
    ]
  },
  {
    "id": "undynehouse",
    "name": "Undynehouse",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/undynehouse/spr_undynehouse_fire_0.png",
      "/sprites/Undertale/waterfall/undynehouse/spr_undynehouse_fire_2.png",
      "/sprites/Undertale/waterfall/undynehouse/spr_undynehouse_fire_6.png",
      "/sprites/Undertale/waterfall/undynehouse/spr_undynehouse_normal_0.png"
    ]
  },
  {
    "id": "undyneuyndying",
    "name": "Undyneuyndying",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_example_0.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_damage_0.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_e_0.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_e_1.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_e_2.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_e_3.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_e_4.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_e_5.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_laugh_0.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_laugh_1.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_mouth_0.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_mouth_1.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_mouth_2.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_mouth_3.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face_mouth_4.png",
      "/sprites/Undertale/waterfall/undyneuyndying/spr_undynex_face1_0.png"
    ]
  },
  {
    "id": "vegetoid",
    "name": "Vegetoid",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/vegetoid/spr_vegetoid_1.png"
    ]
  },
  {
    "id": "vessel",
    "name": "Vessel",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_0.png",
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_1.png",
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_2.png",
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_3.png",
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_4.png",
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_5.png",
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_6.png",
      "/sprites/deltarune/ch1/vessel/IMAGE_GONERHEAD_7.png"
    ]
  },
  {
    "id": "virokun",
    "name": "Virokun",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/virokun/spr_cutscene_26_virovirokun_0.png"
    ]
  },
  {
    "id": "vulkin",
    "name": "Vulkin",
    "games": [
      "undertale"
    ],
    "zones": [
      "hotland"
    ],
    "sprites": [
      "/sprites/Undertale/hotland/vulkin/spr_vulkinhurt_0_processed.png",
      "/sprites/Undertale/hotland/vulkin/spr_vulkinnpc_hotdog_0.png",
      "/sprites/Undertale/hotland/vulkin/spr_vulkinnpc_hotdog_1.png",
      "/sprites/Undertale/hotland/vulkin/spr_vulkinpc_0.png",
      "/sprites/Undertale/hotland/vulkin/spr_vulkinpc_1.png"
    ]
  },
  {
    "id": "watercooler",
    "name": "Watercooler",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch3"
    ],
    "sprites": [
      "/sprites/deltarune/ch3/watercooler/spr_watercooler_0.png"
    ]
  },
  {
    "id": "werewire",
    "name": "Werewire",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch2"
    ],
    "sprites": [
      "/sprites/deltarune/ch2/werewire/spr_cutscene_26_werewerewire_0.png",
      "/sprites/deltarune/ch2/werewire/spr_npc_werewerewire_look_0.png",
      "/sprites/deltarune/ch2/werewire/spr_werewerewire_attack_1_0.png",
      "/sprites/deltarune/ch2/werewire/spr_werewerewire_attack_1_3.png",
      "/sprites/deltarune/ch2/werewire/spr_werewerewire_attack_2_2.png",
      "/sprites/deltarune/ch2/werewire/spr_werewerewire_attack_2_3.png",
      "/sprites/deltarune/ch2/werewire/spr_werewerewire_hurt_0.png",
      "/sprites/deltarune/ch2/werewire/spr_werewerewire_hurt_spark_0.png"
    ]
  },
  {
    "id": "whimsalot",
    "name": "Whimsalot",
    "games": [
      "undertale"
    ],
    "zones": [
      "core"
    ],
    "sprites": [
      "/sprites/Undertale/core/whimsalot/spr_whimsalot_0.png",
      "/sprites/Undertale/core/whimsalot/spr_whimsalothurt_0.png"
    ]
  },
  {
    "id": "whimsun",
    "name": "Whimsun",
    "games": [
      "undertale"
    ],
    "zones": [
      "ruinas"
    ],
    "sprites": [
      "/sprites/Undertale/ruinas/whimsun/spr_whimsun_0.png",
      "/sprites/Undertale/ruinas/whimsun/spr_whimsun_1.png",
      "/sprites/Undertale/ruinas/whimsun/spr_whimsunhurt_0.png"
    ]
  },
  {
    "id": "woshua",
    "name": "Woshua",
    "games": [
      "undertale"
    ],
    "zones": [
      "waterfall"
    ],
    "sprites": [
      "/sprites/Undertale/waterfall/woshua/spr_woshua_1.png",
      "/sprites/Undertale/waterfall/woshua/spr_woshua_2.png",
      "/sprites/Undertale/waterfall/woshua/spr_woshuanpc_0.png",
      "/sprites/Undertale/waterfall/woshua/spr_woshuanpc_3.png"
    ]
  }
];

export function randomCharacter(filter?: { games?: string[]; zones?: string[] }) {
    let filtered = characters;

    if (filter?.games?.length) {
        const want = new Set(filter.games.map((g) => g.toLowerCase()));
        filtered = filtered.filter((c) => c.games.some((g) => want.has(g.toLowerCase())));
    }
    if (filter?.zones?.length) {
        const want = new Set(filter.zones.map((z) => z.toLowerCase()));
        filtered = filtered.filter((c) => c.zones.some((z) => want.has(z.toLowerCase())));
    }
    if (filtered.length === 0) return undefined;
    return filtered[Math.floor(Math.random() * filtered.length)];
    }
