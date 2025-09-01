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
      "/sprites/Undertale/waterfall/aaron/spr_aaronnpc_1.png"
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
    "id": "berdly",
    "name": "Berdly",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
      "/sprites/deltarune/ch1/berdly/spr_berdly_dt_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_dt_1.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_library_r_0.png",
      "/sprites/deltarune/ch1/berdly/spr_berdly_ut_l_1.png",
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
      "/sprites/deltarune/ch1/Blockguy/spr_blockguy_overworld_0.png",
      "/sprites/deltarune/ch1/Blockguy/spr_blockguy_part_6.png",
      "/sprites/deltarune/ch1/Blockguy/spr_blockguy_part_hurt_1.png",
      "/sprites/deltarune/ch1/Blockguy/spr_blockguy_spared_0.png"
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
      "/sprites/Undertale/core/catty/spr_face_catty_8.png"
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
      "/sprites/Undertale/snowdin/dogamy/spr_mandogwalk_3.png"
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
      "/sprites/Undertale/snowdin/doggo/spr_movedogeheadb_0.png"
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
      "/sprites/Undertale/snowdin/icecreamguy/spr_icecreamguy_happy_1.png"
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
      "/sprites/deltarune/ch1/king/spr_kingl_0.png",
      "/sprites/deltarune/ch1/king/spr_kingr_asleep_0.png",
      "/sprites/deltarune/ch1/king/spr_kingr_fallasleep_0.png",
      "/sprites/deltarune/ch1/king/spr_kingr_fallasleep_1.png",
      "/sprites/deltarune/ch1/king/spr_kingr_fallasleep_2.png"
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
      "/sprites/deltarune/ch1/kris/spr_kris_fall_0.png",
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
      "/sprites/deltarune/ch1/kris/spr_krisd_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_slide_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_slide_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisd_slide_light_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisl_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_dark_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_heart_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_kneel_0.png",
      "/sprites/deltarune/ch1/kris/spr_krisr_sit_0.png",
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
      "/sprites/Undertale/snowdin/lesserdog/spr_lesserdoge_0.png"
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
      "/sprites/Undertale/ruinas/napstablook/spr_napstablook_r_0.png"
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
      "/sprites/deltarune/ch1/noelle/spr_noelle_l_0.png",
      "/sprites/deltarune/ch1/noelle/spr_noelle_r_0.png"
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
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock1_0.png",
      "/sprites/deltarune/ch1/puzzlepiece/spr_npc_puzzlepiece_shock2_0.png"
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
    "id": "ralsei",
    "name": "Ralsei",
    "games": [
      "deltarune"
    ],
    "zones": [
      "ch1"
    ],
    "sprites": [
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
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_fell_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_hood_0.png",
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
      "/sprites/deltarune/ch1/ralsei/spr_ralsei_shock_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_act_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_attack_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_attack_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_attackready_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_battleintro_6.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_bow_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_defend_1.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_defend_4.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_item_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_shock_enemy_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_sing_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_spell_3.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_spellready_0.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_victory_12.png",
      "/sprites/deltarune/ch1/ralsei/spr_ralseib_victory_2.png",
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
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_0.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_1.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_2.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_3.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_4.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_5.png",
      "/sprites/deltarune/ch1/roulx/spr_face_rurus_6.png",
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
      "/sprites/deltarune/ch1/rudy/spr_rudy_laugh_1.png"
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
      "/sprites/deltarune/ch1/susie/spr_susie_brave_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_brave_discouraged_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_brave_shock_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_dark_relax_0.png",
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
      "/sprites/deltarune/ch1/susie/spr_susie_laughlancer_0.png",
      "/sprites/deltarune/ch1/susie/spr_susie_shock_0.png",
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
