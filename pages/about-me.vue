<template>
  <div class="container" style="max-width: 1200px !important">
    <section>
      <div class="row">
        <div class="col-md-3 mb-4">
            <img :src="require('~/assets/profile-picture.png')" class="img-fluid p-4" alt="">
        </div>
        <div class="col-md-9 flex-column d-flex justify-content-center">
          <h1 class="fw-bold mb-0">About Me</h1>
          <p>
            Hi, thanks for being interested in learning a bit more about me! My name's Dale (aka Findo), I'm a developer with a passion for making cool and interesting games.
            <br />
            <br />If you're interested in what I'm like as a person - I've included some of my other passions below and a bit more of a detailed breakdown of my life of programming right from the very beginning.
          </p>
        </div>
      </div>

      <div class="row flex-column-reverse flex-md-row">
        <div class="col-md-8">
          <h2 class="fw-bold mb-2">Game development, whats that?</h2>
          <hr class="my-2 mb-3" />
          <div v-for="section in sections" :key="section.header">
            <h3 class="fw-bold mb-2">{{section.header}}</h3>
            <p v-if="shortVersion" v-html="section.short"></p>
            <p v-else v-html="section.long"></p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="tldr-disclaimer sticky-top mb-4">
            <strong class="d-block">TLDR; Version</strong>
            <p
              class="mb-0"
            >I wanted to be as verbose as possible so i've included a TLDR; version, click below to read it instead.</p>
            <button
              class="btn btn-sm btn-light mt-2"
              @click="shortVersion = !shortVersion"
            >Toggle TLDR; version</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  head: {
    title: "Dale Findlay | About Me"
  },
  data() {
    return {
      shortVersion: false,
      sections: [
        {
          header: "How I Got Started",
          long:
            "I first started my foray into the world of games years ago with Minecraft, I found out that you can add new items to the game. Minecraft was written in Java, so I spent countless hours trying to get the development environment setup in Eclipse with great difficulty. Once I had it working though, it felt like magic, I got quickly bored and wanted a bit more of a challenge. It’s a little embarrassing that Minecraft is what got me interested in video games, but honestly without it, I might never have found game programming.",
          short:
            "I started programming by adding items/models/recipes to minecraft learning java but it quickly became boring and I yearned for a challenge."
        },
        {
          header: "A New Foe Has Appeared",
          long:
            "After working with Java for a while outside of the minecraft realm, I decided I really wanted more of a challenge, the obvious next steps would be to take a small incremental step like learning C#, but not for me. I wanted to go straight to C++ which was extremely challenging. It forced me to re-evaluate how I approached programming and gave me a newfound appreciation for game programmers. But now in hind-sight, it was probably the best thing I could have done, spending every waking hour trying to get my head around the language really taught me a great deal of persistence is required sometimes to get the job done and it's almost never easy haha.",
          short:
            "Java was great, but C++ completely changed my view of programming, forcing me to re-evaluate my approach to programming and taught me that a great deal of persistence is required when learning new things."
        },
        {
          header: "Finding The Artist Within",
          long:
            "Working in C++ for a while was great, but it wasn’t hitting all the right buttons. For whatever reason I still felt like I was missing something about the game's experience. I had really enjoyed the 3D-modeling aspect of minecraft stuff so I decided to pick it up again. Luckily enough, I was still a student at the time and I could get access to 3DS Max and Maya for free, so off I went, trial and error watching hours of digital tutors content that I begged my parents to buy me. But something was still missing, what if i could bring it all together…",
          short:
            "I was loving the programming, but I was missing the artistic aspect of the Minecraft stuff. I decided to re-engage with 3D-modeling with Maya, but I wanted to bring it all together…"
        },
        {
          header: "The Answer I Was Always Looking For",
          long:
            "Thanks to the magic of timing and luck - something I'm still yet to understand about the mystery of the universe, UDK came along just at the right time, turns out all the big game developers working on games like Bioshock and Borderlands were using Unreal Engine 3, my mind was blown, i was using (close to) the same tool sets as these massive developers. It empowered me to focus forthrightly on learning unreal and I loved every moment of it. And then, to top it off a new version of unreal engine 4 had just come out and was a revolutionary jump in quality, but it was a bit out of my price range, so thanks to some amazing folks at Epic Games, I was able to get my hands on an early UE4 key. Only for it to become completely free a short time later.<br/><br/>I still vividly remember waiting all night for Unreal Engine 4 to download and opening up the engine for the first time and playing around with the starter content. With UE5 recently I was able to relive that feeling and I'm so excited to get into all that that brings with it.",
          short:
            "The universe is crazy, at the perfect time UDK rears its head and i loved it, i felt like a AAA developer using the same (or close to) tools as they were using to make games like Bioshock and Borderlands, then thanks to some awesome folks at Epic i got my hands on a UE4 key and it was so amazing to open up the interface for the first time and be wowed by the visual quality, i’ve since been able to relive this feeling with UE5 and i can't wait to play with it more."
        }
      ]
    };
  }
};
</script>

<style>
.tldr-disclaimer {
  padding: 0.75rem;
  max-width: 500px;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background-color: #242424;
}
</style>