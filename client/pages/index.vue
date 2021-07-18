<template>
  <div class="bg-blue-gray-800 h-screen w-full flex flex-col">
    <navigation />
   <div class="flex flex-1 items-center justify-center">
      <div class="max-w-6xl w-full flex">
        <div>
          <svg class="h-92 w-auto animate-pulse " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249 439"><path d="M13 26.74C13 18.6 19.6 12 27.74 12h195.552c8.141 0 14.74 6.6 14.74 14.74v345.024c0 13.357-16.344 19.827-25.486 10.088l-76.284-81.254c-5.822-6.202-15.67-6.202-21.492 0l-76.284 81.254C29.344 391.591 13 385.121 13 371.764V26.74z" fill="#ECA400" opacity=".1"/><path d="M0 16.3C0 7.297 7.298 0 16.3 0h216.24c9.002 0 16.299 7.298 16.299 16.3v381.524c0 14.771-18.073 21.925-28.183 11.156l-84.353-89.851c-6.438-6.857-17.329-6.857-23.767 0L28.183 408.98C18.073 419.749 0 412.595 0 397.824V16.3z" fill="#27476E" opacity=".1"/><path d="M19.36 32.849C19.36 25.2 25.56 19 33.209 19h183.73c7.649 0 13.849 6.2 13.849 13.849v324.166c0 12.55-15.356 18.628-23.946 9.479l-71.671-76.343c-5.471-5.827-14.724-5.827-20.194 0l-71.672 76.343c-8.59 9.149-23.945 3.071-23.945-9.479V32.849z" fill="#ECA400"/><ellipse cx="77.295" cy="120.559" rx="23.313" ry="29.545" fill="#FBFFED"/><ellipse cx="81.449" cy="127.484" rx="9.002" ry="11.079" fill="#001D4A"/><ellipse cx="82.142" cy="122.637" rx="4.155" ry="4.847" fill="#FBFFED"/><ellipse cx="172.391" cy="120.559" rx="23.313" ry="29.545" fill="#FBFFED"/><ellipse cx="176.546" cy="127.484" rx="9.002" ry="11.079" fill="#001D4A"/><ellipse cx="177.7" cy="122.637" rx="4.155" ry="4.847" fill="#FBFFED"/><circle cx="77.525" cy="120.559" r="39.008" stroke="#001D4A" stroke-width="6.925"/><circle cx="173.545" cy="120.559" r="39.008" stroke="#001D4A" stroke-width="6.925"/><path stroke="#001D4A" stroke-width="6.925" d="M118.611 118.944h13.849"/><path stroke="#001D4A" stroke-width="6.925" stroke-linecap="round" d="M22.896 113.429l13.057 13.057M215.092 124.845l13.057-13.057"/><path d="M176.315 205.5c-38.941 31.37-60.771 32.637-99.713 0h99.713z" fill="#FBFFED"/></svg>
        </div>
        <div class="text-white ml-32">
          <h1 class="text-6xl font-semibold">Hey! I am <span class="text-yellow-500 font-bold">Artilingo</span>.</h1>
          <h2 class="text-3xl text-yellow-500 my-6">Welcome!</h2>
          <p class="leading-8 tracking-wide text-2xl">Learning languages is fun with me. Improve your language skills by reading bite-sized real-world articles and earning achievments along the way. While competing with your friends and world wide!</p>
          <nuxt-link to="/signup" class="mt-6 motion-safe:transition ease-in-out duration-300 inline-block bg-transparent border-3 border-yellow-500 hover:border-white hover:text-yellow-500 hover:bg-white text-white py-3 px-6 text-center uppercase font-bold text-lg rounded-3xl">Let's Get Started</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth : 'guest',
};
</script>
