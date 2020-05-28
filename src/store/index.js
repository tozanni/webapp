import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    medicalRecords: [],
    currentRecord: {
      "id": 0,
      "admission_date": "2020-05-28T18:29:07.618Z",
      "id_canonical": "string",
      "status": "string",
      "egress_date": "2020-05-28T18:29:07.618Z",
      "egress_type": "string",
      "rcp_required": true,
      "treatment": "string",
      "egress_notes": "string",
      "vital_signs": {
        "id": 0,
        "age": "2020-05-28T18:29:07.618Z",
        "gender": "string",
        "weight": 0,
        "height": 0,
        "diastolic_blood_pressure": 0,
        "systolic_blood_pressure": 0,
        "heart_rate": 0,
        "breathing_frequency": 0,
        "temperature": 0,
        "oximetry": 0,
        "capillary_glucose": 0,
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "triage": {
        "id": 0,
        "days_before_admission": 0,
        "difficulty_breathing": true,
        "chest_pain": true,
        "headache": "string",
        "cough": "string",
        "smoker": true,
        "pregnant": true,
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "created_at": "2020-05-28T18:29:07.618Z",
      "updated_at": "2020-05-28T18:29:07.618Z",
      "hematic_biometry": {
        "id": 0,
        "hematocrit": 0,
        "hemoglobin": 0,
        "leukocytes": 0,
        "platelets": 0,
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "blood_chemistry": {
        "id": 0,
        "glucose": 0,
        "urea": 0,
        "creatinine": 0,
        "cholesterol": 0,
        "triglycerides": 0,
        "glycated_hemoglobin": 0,
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "serum_electrolytes": {
        "id": 0,
        "sodium": 0,
        "potassium": 0,
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "medical_notes": {
        "id": 0,
        "notes": "string",
        "prescription_drugs": "string",
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "liver_function": {
        "id": 0,
        "aspartate_aminotransferase": 0,
        "alanine_transaminase": 0,
        "blood_urea_nitrogen": 0,
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "clotting_time": {
        "id": 0,
        "prothrombin": 0,
        "thromboplastin": 0,
        "created_at": "2020-05-28T18:29:07.618Z",
        "updated_at": "2020-05-28T18:29:07.618Z"
      },
      "immunological": {
        "id": 0,
        "reactive_protein_c": 0
      }
    }
  },
  mutations: {
    setRecords(state, records) {
      state.medicalRecords = records;
    },

    decrementRecordInventory(state, { id }) {
      const record = state.medicalRecords.find((record) => record.id === id);
      record.inventory--;
    },
  },
  actions: {
    getAllMedicalRecords({ commit }) {
      //TODO: fetch records from api
    },
  },
  modules: {},
});

