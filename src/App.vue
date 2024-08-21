<script setup>
import { ref } from "vue";
let email = ref("");
let isValid = ref();
let red = ref(false);
let validation = () => {
  const pattern =  '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
  if (email.value.match(pattern)) {
    isValid.value = true;
  } else {
    isValid.value = false;
  }
};

let sendmail = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kmblak8@gmail.com",
    Password: "98D64FB709689FC76B1FFC8ED62E365D1450",
    To: email.value,
    From: "kmblak8@gmail.com",
    Subject: "Account confirmation",
    Body: "your account has been verified",
  }).then((message) => alert(message));
  console.log("hello");
};
let pop = ref(false);

const submit = () => {
  sendmail();
};
</script>

<template>
  <body class="w-full h-[640px]  bg-CharcoalGrey">
    <div
      class="bg-white md:rounded-3xl w-[100%] mx-auto sm:relative sm:top-16  sm:w-[720px] h-[900px] sm:h-[495px] sm:my-0 sm:flex sm:flex-row-reverse"
      :class="{ hidden: pop }"
    >
      <!--first-div-->
      <div class="md:py-[10px] " :class="{ hidden: pop }">
        <picture>
          <source
            media="(min-width: 600px)"
            class="mobile "
            srcset="../img/illustration-sign-up-desktop.svg"
            alt=""
          />
          <img
            class="w-[100%] sm:w-[95%] sm:h-[99%] sm:rounded-tl-none sm:rounded-bl-none"
            src="../img/illustration-sign-up-mobile.svg"
            alt=""
          />
        </picture>
      </div>
      <!--second div-->
      <div
        class="px-8  w-[100%] md:w-[50%] sm:px-2 sm:mx-auto sm:pt-5"
        :class="{ hidden: pop }"
      >
        <div>
          <h1 class="text-CharcoalGrey  font-bold text-5xl my-7 sm:text-5xl">
            Stay updated!
          </h1>
          <p class="text-[16px]">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>
        <div class="mt-4 mb-3">
          <ul>
            <li class="flex mb-2">
              <img
                src="../img/icon-success.svg"
                alt=""
                width="25"
                height="25"
                class="mr-6"
              />
              <p class="text-[1rem] sm:text-[15px]">
                Product discovery and building what matter
              </p>
            </li>
            <li class="flex mb-[0.3rem]">
              <img
                src="../img/icon-success.svg"
                alt=""
                width="25"
                height="25"
                class="mr-6"
              />
              <p class="text-lg sm:text-[15px]">
                Measuring to ensure updates are a success
              </p>
            </li>
            <li class="flex mb-2">
              <img
                src="../img/icon-success.svg"
                alt=""
                width="25"
                height="25"
                class="mr-6"
              />
              <p class="text-lg sm:text-[15px]">And much more!</p>
            </li>
          </ul>
        </div>
        <div>
          <div action="#">
            <div class="bspan mt-14 sm:mt-6">
              <span class="flex justify-between">
                <p class="font-bold text-[11px]">E-mail address</p>
                <span
                  id="text"
                  v-if="email.length > 0"
                  :class="{ valid: isValid, redtext: red }"
                  >{{
                    isValid ? "valid address" : "invalid email address"
                  }}</span
                >
              </span>

              <input
                class="border border-gray-400 rounded-md mb-2 w-full h-12 pl-4"
                v-model="email"
                @input="validation()"
                @click="red = true"
                :class="[{ bgred: red, bggreen: isValid }]"
                type="email"
                name="email"
                id="email"
                placeholder="example@yahoo.com"
              />
            </div>
          </div>
          <div @click="pop = true">
            <button
              class="font-bold bg-CharcoalGrey hover:bg-gradient-to-r from-gl to-gr p-4 mb-3 text-white rounded-md w-full"
              id="btn"
              @click="submit()"
            >
              Subscribe to monthly news letters
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="popup" :class="{ openpopup: pop }" id="popup">
      <div class="w-[400px] p-7 rounded-[15px] bg-white mx-auto">
        <img
          src="../img/icon-success.svg"
          alt=""
          width="40"
          height="40"
          class="mr-6"
        />
        <h2 class="text-start">Thank you for your subscribing</h2>
        <p>
          A confirmation email has been sent to
          <span class="font-bold" id="out">{{ email }}</span> please open it and
          click on the button inside to confirm subscription
        </p>
        <button type="button" class="hover:bg-Tomato" @click="pop = false">
          Got it
        </button>
      </div>
    </div>
  </body>
</template>

<style scoped>
.redtext {
  color: red;
}
.bgwhite {
  background-color: white;
}
.bggray {
  background-color: hsl(235, 18%, 26%);
  position: absolute;
}
.bgred {
  background-color: rgb(255, 193, 193);
}
.bggreen {
  background-color: rgb(172, 252, 165);
}
.popup {
  width: 400px;
  background: #fff;
  border-radius: 15px;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  text-align: center;

  color: #333;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;
}
.hidden {
  display: none;
}
.valid {
  color: green;
}
.invali {
  color: red;
}
.popup h2 {
  font-size: 38px;
  font-weight: bold;
  margin: 30px 0px 10px;
}
.pbold {
  font-weight: bold;
}
.popup button {
  width: 100%;
  margin-top: 50px;
  padding: 10px 0px;
  background: hsl(235, 18%, 26%);
  color: #fff;
  border: 0;
  outline: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.popup img {
  padding-top: 15px;
}

.openpopup {
  visibility: visible;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
}
</style>
