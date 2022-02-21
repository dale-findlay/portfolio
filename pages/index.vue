<template>
  <div class="container" style="max-width: 1200px !important">
    <section>
      <h1 class="fw-bold mb-0">Hello, World!</h1>
      <small style="opacity: 0.5" class="d-block mb-2">*obligitory hello world joke.*</small>
      <p>
        Hi there, my name is Dale Findlay. I’m a game developer and an experienced software engineer with leadership experience, i'm always looking to learn new things and apply my skills in new and interesting ways. I pride myself on my ability to take on any challange and i'm passionate about solving complex problems with new and innovative solutions.
        <br />
        <br />If you care to learn more about me and what drew me into the world of games, feel free to click below!
      </p>
      <a class="btn btn-sm btn-outline-primary mb-3" href="/about-me">Learn more about me!</a>
    </section>
    <section>
      <div class="row">
        <div class="col-md-3 d-none d-md-block">
          <div class="sticky-top pt-4">
            <div class="sidebar-section mb-2">
              <strong>Games/Experiences</strong>
              <a v-for="item in games" v-bind:key="item.id" :href="`#${item.id}`">{{item.name}}</a>
            </div>
            <div class="sidebar-section mb-2">
              <strong>Software Development</strong>
              <a v-for="item in software" v-bind:key="item.id" :href="`#${item.id}`">{{item.name}}</a>
            </div>
            <div class="sidebar-section mb-2">
              <strong>Personal Projects</strong>
              <a v-for="item in personal" v-bind:key="item.id" :href="`#${item.id}`">{{item.name}}</a>
            </div>
            <div class="sidebar-section">
              <strong>Game Jams</strong>
              <a v-for="item in gameJams" v-bind:key="item.id" :href="`#${item.id}`">{{item.name}}</a>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <h2 class="fw-bold">Games/Experiences</h2>
          <p>These are the games/experiences that i've completed and shipped professionally.</p>
          <item-card v-for="game in games" v-bind:key="game.id" :itemData="game" />
          <h2 class="fw-bold mt-4">Software Development</h2>
          <p>These are the projects professionally that don't fall into the games/experiences category, but are still extremely relevent experience.</p>
          <item-card v-for="software in software" v-bind:key="software.id" :itemData="software" />
          <h2 class="fw-bold mt-4">Personal Projects</h2>
          <p>These are some personal projects i've completed, please note that some of these are quite old, so please bare with past-me.</p>
          <item-card v-for="software in personal" v-bind:key="software.id" :itemData="software" />
          <h2 class="fw-bold mt-4">Game Jams / School Projects</h2>
          <p>These are some of the game jams/school projects i did that i still really love.</p>
          <item-card v-for="item in gameJams" v-bind:key="item.id" :itemData="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  name: "IndexPage",
  head: {
    title: "Dale Findlay | Home"
  },
  data() {
    return {
      games: [
        {
          id: "titanlake-vr",
          name: "TitanLake VR",
          description:
            "TitanLake VR is a high-fidelity VR astronaut simulation experience. The project was developed in Unreal Engine 4 and was recently awarded an Epic MegaGrant. <br /> <br />The experience was written in C++ targeting a high-performance PC-VR system.",
          slides: [
            {
              alt: "TitanLake VR Splash",
              url: require("~/assets/titanlake-vr/splash.jpeg")
            },
            {
              alt: "TitanLake VR Gameplay",
              url: require("~/assets/titanlake-vr/gameplay.gif")
            },
            {
              alt: "TitanLake VR Tools",
              url: require("~/assets/titanlake-vr/tools.jpeg")
            }
          ],
          badges: ["C++", "Unreal Engine 4", "VR", "Shipped"]
        },
        {
          id: "mission-risk",
          name: "Mission: Risk",
          description:
            "Mission: Risk is a point and click learning game centered around non-financial risk developed for Westpac Group. The game was developed in Unreal Engine 4 targeting HTML5 with extremely tight resource and bandwidth limitations.<br /><br />The game’s core systems were written in C++ with much of the game’s scripting being developed in blueprint alongside the UI.<br /><br />Shipped in July 2021, with a record number of plays for a piece of non-mandatory learning at Westpac. This project went on to win several awards including the AITD excellence award for Best Use of Gamification/Simulation for Learning.",
          slides: [
            {
              alt: "Mission: Risk Logo",
              url: require("~/assets/mission-risk/logo.jpeg")
            },
            {
              alt: "Mission: Risk Awards",
              url: require("~/assets/mission-risk/splash.jpeg")
            }
          ],
          badges: ["C++", "Unreal Engine 4", "HTML5", "Shipped"]
        }
      ],
      software: [
        {
          id: "titanlake",
          name: "TitanLake",
          description:
            "TitanLake is an underwater VR training and simulation platform developed by Raytracer and funded by the Australian Space Agency. <br/><br/>I lead the development of the HMD driver (written in C++ w/ OpenVR) working to integrate the tracking and odometry produced by the proprietary underwater tracking system.",
          slides: [
            {
              alt: "TitanLake Splash",
              url: require("~/assets/titanlake/titanlake.jpeg")
            }
          ],
          badges: ["C++"]
        },
        {
          id: "carbon",
          name: "CARBON/CARBON View",
          description:
            "CARBON is a command and control protocol for robots designed for multi-agent and various landscapes. The main tech stack built using ROS, comprises a wide array of shared and abstract autonomous robot functionality written in C++. <br/> <br/>I'm leading the development of the dev environment systems and CARBON View, an application built in Unreal Engine 4 to interface with the system.",
          slides: [
            {
              alt: "Carbon Splash",
              url: require("~/assets/carbon/logo.png")
            }
          ],
          badges: ["C++"]
        },
        {
          id: "dopple",
          name: "Dopple",
          description:
            "Dopple is a 3D scanning and CAD app that instantly captures your space and produces realistic renderings with accurate measurements with a multitude of other features. <br/><br/>I worked on the team that originally brought the app to life as an R&D project and went on to lead the development of a revamped version of the app, written in Unity C#.",
          slides: [
            {
              alt: "Dopple Splash",
              url: require("~/assets/dopple/logo.png")
            }
          ],
          badges: ["C#", "Unity", "iOS"]
        }
      ],
      personal: [
        {
          id: "horizon",
          name: "Horizon Game Engine",
          description:
            "Horizon Game Engine is a game engine written in C++ with using OpenGL for rendering and implementing a Mono C# runtime for gameplay scripting. It's featured in the DustBot demo below.",
          slides: [
            {
              alt: "Horizon Game Engine Splash",
              url: require("~/assets/horizon/splash.png")
            }
          ],
          linkBadges: [
            {
              type: "github",
              href: "https://github.com/dale-findlay/dustbot-demo/tree/master/DustBot/HorizonEngine"
            }
          ],
          badges: ["C++"]
        },
        {
          id: "dustbot",
          name: "DustBot Demo",
          description:
            "Dustbot is a sandbox project for Horizon Game Engine written in C++. It showcases a very basic path-finding simulation (courtesy of Aim) running within the engine's C# runtime.",
          slides: [
            {
              alt: "DustBot Splash",
              url: require("~/assets/dustbot/splash.png")
            }
          ],
          linkBadges: [
            {
              type: "github",
              href: "https://github.com/dale-findlay/dustbot-demo"
            },
            {
              type: "windows",
              href:
                "https://github.com/dale-findlay/dustbot-demo/releases/download/v1.0.0/Dustbot_v1.zip"
            }
          ],
          badges: ["C++", "C#"]
        },
        {
          id: "aim",
          name: "AIM - AI Library",
          description:
            "Aim is a basic artificial intelligence library - providing basic functionality like behavior trees and basic A* path-finding. It's also featured in the above Dustbot Demo.",
          slides: [
            {
              alt: "AIM Splash",
              url: require("~/assets/aim/splash.png")
            }
          ],
          linkBadges: [
            { type: "github", href: "https://github.com/dale-findlay/aim" }
          ],
          badges: ["C#"]
        }
      ],
      gameJams: [
        {
          id: "ufnc",
          name: "Ultimate Fun Noodle Championship",
          description:
            "Ultimate Fun Noodle Championship is an arcade-style game in which the player must eat as many noodle bowls as possible in thirty seconds. <br /> <br />The game was made as part of a game jam, written in C#.",
          slides: [
            {
              alt: "Ultimate Fun Noodle Championship Logo",
              url: require("~/assets/ufnc/logo.gif")
            },
            {
              alt: "Ultimate Fun Noodle Championship Gameplay",
              url: require("~/assets/ufnc/gameplay.gif")
            }
          ],
          linkBadges: [
            { type: "github", href: "https://github.com/dale-findlay/UFNC" },
            { type: "windows", href: "https://github.com/dale-findlay/UFNC/releases/download/1.0/UNFC_v1.6_Win64.zip" },
            { type: "android", href: "https://github.com/dale-findlay/UFNC/releases/download/1.0/UNFC_v1.6_Android.apk" }
          ],
          badges: ["C#", "Unity", "Game Jam"]
        },
        {
          id: "relativity",
          name: "Relativity",
          description:
            "Relativity is a first-person shooter action puzzle game, where you must race against the clock to collect the cubes and climb the tower as fast as possible, beat your personal best and you’ll earn your spot on the leaderboard. <br /> <br />The game was made as part of a game jam, written in C#.",
          slides: [
            {
              alt: "Relativity Logo",
              url: require("~/assets/relativity/logo-splash.png")
            },
            {
              alt: "Relativity Gameplay",
              url: require("~/assets/relativity/gameplay.gif")
            }
          ],
          linkBadges: [
            { type: "github", href: "https://github.com/dale-findlay/relativity" },
            { type: "windows", href: "https://github.com/dale-findlay/relativity/releases/download/1.0/Relativity_v1_Win64.zip" }
          ],
          badges: ["C#", "Unity", "Game Jam"]
        },
        {
          id: "tcfh",
          name: "Time Crystals for Humanity",
          description:
            "Time Crystals for Humanity is a game in which you control 4 brothers, with 120 seconds on the clock you must collect the gems, save the universe and reunite the brothers. <br /> <br />The game was made as part of a game jam, written in C#.",
          slides: [
            {
              alt: "Time Crystals for Humanity Logo",
              url: require("~/assets/tcfh/logo.gif")
            },
            {
              alt: "Time Crystals for Humanity Gameplay",
              url: require("~/assets/tcfh/gameplay.gif")
            },
            {
              alt: "Time Crystals for Humanity Main Menu",
              url: require("~/assets/tcfh/main-menu.gif")
            }
          ],
          linkBadges: [
            { type: "github", href: "https://github.com/dale-findlay/tcfh" },
            { type: "windows", href: "https://github.com/dale-findlay/tcfh/releases/download/1.0/TCFH_v1_Win64.zip" }
          ],
          badges: ["C#", "Unity", "Game Jam"]
        },
        {
          id: "fff",
          name: "Frantic Food Frenzy",
          description:
            "Frantic Food Frenzy ​is a 3D third-person chaotic cooking and driving game where the player collects, cooks and combines ingredients all while driving. The player is in control of a food delivery van and must collect ingredients from around town, cook a recipe while behind the wheel and finally deliver it to the hungry customer before time runs out. <br /> <br />The game was developed in two major stages, a prototype stage done over ~2 weeks and a longer production timeline over 8 weeks.",
          slides: [
            {
              alt: "Frantic Food Frenzy Logo",
              url: require("~/assets/fff/logo.jpeg")
            },
            {
              alt: "Frantic Food Frenzy Gameplay 1",
              url: require("~/assets/fff/gameplay-1.png")
            },
            {
              alt: "Frantic Food Frenzy Gameplay 2",
              url: require("~/assets/fff/gameplay-2.png")
            },
            {
              alt: "Frantic Food Frenzy Gameplay 3",
              url: require("~/assets/fff/gameplay-3.png")
            }
          ],
          linkBadges: [
            { type: "windows", href: "https://github.com/dale-findlay/frantic-food-frenzy/releases/download/prototype-v3/FFF_Prototype_v3_Win64.zip" }
          ],
          badges: ["C#", "Unity", "Game Jam"]
        }
      ]
    };
  }
};
</script>



<style>
</style>
