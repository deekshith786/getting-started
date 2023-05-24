<template>
  <!-- <div>
    <pre>
            {{ JSON.stringify(formValues, null, 2) }}
        </pre
    >
  </div> -->
  <form @submit="submitForm">
    <!-- form input  -->
    <div>
      <label for="name ">Name</label>
      <input type="text" id="name" v-model="formValues.name" />
    </div>
    <!-- textarea -->
    <div>
      <label for="profile">Profile</label>
      <textarea type="text" id="profile" v-model="formValues.profileSummary" />
    </div>
    <!-- dropdown -->
    <div>
      <label for="country">country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore ">Singapore</option>
      </select>
    </div>
    <!-- multiple  -->
    <div>
      <label for="location">location</label>
      <select id="location" multiple v-model="formValues.location">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore ">Singapore</option>
      </select>
    </div>
    <!-- checkbox -->
    <div>
      <label for="html">Skill</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skills"
      />
      <label for="html">HTML</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skills" />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skills"
      />
      <label for="javascript">Javascript</label>
    </div>
    <!-- multiple checkbox -->
    <div>
      <input
        type="checkbox"
        id="skills"
        v-model="formValues.remote"
        true-value="yes"
        false-value="no"
      />
      <label for="remotework">open for remote</label>
    </div>

    <!-- radio  -->
    <div>
      <label>experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.experience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.experience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.experience"
      />
      <label for="6-10">6-10</label>
    </div>

    <!-- submit -->
    <div>
      <button>submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormView",
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        location: [],
        remote: "no",
        skills: [],
        experience: "",
      },
    };
  },
  methods: {
    submitForm(event) {
      // to prevent default page refresh we are adding the below statement
      event.preventDefault();
      console.log("Form Values", this.formValues);
    },
  },
};
</script>

<style></style>
