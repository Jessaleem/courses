<!-- <NuxtLayout> and <NuxtPage /> configures project's routing - <NuxtLink> to link the route that you need to go (Navigation) you can add components directly to this file-->
<template>
  <div>
    <NuxtLayout>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </nav>
      <Header />
      <NuxtPage />
      <Profile />
    </NuxtLayout>
  </div>
</template>
