<template>
  <div>
    <KapperNavigatie/>
    <div class="body">
      <h2>Behandelingen</h2>
      <div class="card ">
        <FormulateForm
          @submit="addTreatment"
          v-model="newTreatment"
          name="createBehandeling"
        >
          <table>
            <tr>
              <th>Behandeling</th>
              <th>Tijd</th>
              <th colspan="2">Prijs</th>
            </tr>

            <tr v-for="treatment of treatments">
              <td>{{ treatment.name }}</td>
              <td>{{ treatment.minuteDuration }} min</td>
              <td colspan="2">€ {{ treatment.price }}</td>
            </tr>

            <tr>
              <td>
                <FormulateInput
                  type="text"
                  name="name"
                  placeholder="Naam"
                  validation="required"
                />
              </td>
              <td>
                <div class="flex align-center">
                  <FormulateInput
                    type="number"
                    name="minuteDuration"
                    placeholder="Minuten"
                    validation="required|min:0"
                  />
                  <span class="minutes"> min</span>
                </div>
              </td>
              <td>
                <div class="flex align-center">
                  <span class="euroteken">€</span>
                  <FormulateInput
                    type="number"
                    name="price"
                    placeholder="Prijs"
                    validation="required|min:0"
                  />
                </div>
              </td>
              <td>
                <FormulateInput
                  type="submit"
                  class="add-button"
                >
                  <PlusIcon/>
                </FormulateInput>
              </td>
            </tr>
          </table>
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script>
import KapperNavigatie from "../../../components/KapperNavigatie";
import PlusIcon from "../../../components/icons/PlusIcon";

export default {
  components: {
    PlusIcon,
    KapperNavigatie
  },
  methods: {
    async addTreatment(formData) {
      this.treatments.push(await this.$axios.$post('treatment/create', formData));
      this.$formulate.reset("createBehandeling")
    }
  },
  data() {
    return {
      treatments: [],
      newTreatment: {}
    }
  },
  async fetch() {
    this.treatments = await this.$axios.$get('treatment/list');
  }
}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  padding: 4rem;

  h2 {
    margin-bottom: 2rem;
  }

  .card {
    padding: 2rem;

    table {
      width: 100%;
      text-align: left;

      border-collapse: collapse;

      th, td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 1rem 0;

        .minutes {
          padding-left: 5px;
        }

        .euroteken {
          padding-right: 5px;
        }

        .add-button {
          margin-left: 10px;
        }

        ::v-deep input {
          padding: 5px;
          border-radius: 5px;
          border: 1px solid black;
        }

        ::v-deep button {
          height: 1.5rem;
          width: 1.5rem;
          padding: 0;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
