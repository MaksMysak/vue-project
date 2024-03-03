<script setup>
  import { ref } from 'vue';
  import { collection, addDoc } from 'firebase/firestore';
  import db from '../../firebase';
  
  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    rating: null,
    review: '',
  });
  
  const clearForm = () => {
    formData.value.firstName = '';
    formData.value.lastName = '';
    formData.value.email = '';
    formData.value.phone = '';
    formData.value.rating = null;
    formData.value.review = '';
  };

  const submitForm = async () => {
    try {
        const collectionRef = collection(db, 'message');
        console.log(formData);
        await addDoc(collectionRef, formData.value);
        console.log('Data added successfully!');
      } catch (error) {
        console.error('Error adding data: ', error);
      }
  };
  </script>


<template>
  <form class="bg-white	rounded-md p-8">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Feedback Form</h2>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input required type="text" name="firstName" id="firstName" v-model="formData.firstName" autocomplete="firstName" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input required type="text" name="lastName" id="lastName" v-model="formData.lastName" autocomplete="lastName" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input required id="email" name="email" type="email" v-model="formData.email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
            <div class="mt-2">
              <input required type="text" v-model="formData.phone" name="phone" id="phone" autocomplete="phone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>


          <div class="col-span-full">
            <label for="rating" class="block text-sm font-medium leading-6 text-gray-900">Product rating</label>
            <input 
              required
              type="number"
              id="rating"
              v-model="formData.rating"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              min="1"
              max="5"
            />
          </div>

          <div class="col-span-full">
            <label for="review" class="block text-sm font-medium leading-6 text-gray-900">Feedback</label>
            <textarea
              id="review"
              v-model="formData.review"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button v-on:click="submitForm" class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Send Feedback
      </button>
    </div>
  </form>
</template>
  
<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
  