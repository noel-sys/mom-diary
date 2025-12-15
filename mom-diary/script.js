const pages = [

  `
  <div class="cover">
    <img src="images/cover.jpg" alt="Cover image">
    <h1>To the first woman I ever loved</h1>
    <p class="subtitle">Words I learned to say because of you</p>
  </div>
  `,

  `
  <h2>Contents</h2>
  <p>
    1. Before I Understood<br>
    2. The Things I Never Said<br>
    3. Watching You Quietly<br>
    4. When I Started Understanding<br>
    5. Who You Made Me<br>
    6. If I Could Go Back<br>
    7. Today
  </p>
  `,

  `
  <h2>Before I Understood</h2>
  <p>
    When I was young, I thought everything was normal.

    Food on the table.
    Clean clothes.
    Someone always asking if I had eaten.

    I didn’t know these things took effort.
    I didn’t know they took patience.
    I didn’t know they took parts of you.

    Back then, I only knew that you were always there.
    I never asked how.
    I never asked why.

    I understand now.
  </p>
  `,

  `
  <h2>The Things I Never Said</h2>
  <p>
    I never said thank you for the things you did when no one was watching.

    You always spoke to me calmly, even when I was angry.
    You listened, supported me, and never made me feel like I was too much.

    I remember how I used to trouble Neha while you were cooking —
    you holding her in one hand and managing everything with the other.
    You never shouted.
    You never made me feel like a problem.

    Before you ever told me to take my health seriously, you changed yourself first.
    You showed me that discipline starts from within.
    That lesson stayed with me.

    You prayed for me every day — sometimes with tears —
    asking God to give me a good life and a good future.

    You stood by me when I wanted to play football.
    You convinced pappa.
    You protected my childhood passions.

    I never said thank you for all of this.

    I’m saying it now.
  </p>
  `,

  `
  <h2>Watching You Quietly</h2>
  <p>
    You never announced your sacrifices.
    You never asked to be thanked.

    You adjusted your life so I could live mine freely.
    You carried worries silently so I could sleep peacefully.

    There were days you were tired, but you still showed up.
    There were moments you were hurt, but you still smiled.

    I watched all of this quietly.
    I understood it fully only much later.
  </p>
  `,

  `
  <h2>When I Started Understanding</h2>
  <p>
    Growing up changes the way you see your parents.

    You stop seeing only rules and instructions.
    You start seeing strength.
    You start seeing responsibility.

    I began to understand how much you carried without complaining.
    How much you protected me without expecting anything in return.

    That’s when respect turned into gratitude.
    And gratitude turned into something deeper.
  </p>
  `,

  `
  <h2>Who You Made Me</h2>
  <p>
    If someone asks me who I am today, part of the answer will always be you.

    My discipline.
    My patience.
    My ability to keep going when things don’t go my way.

    These didn’t appear overnight.
    They came from watching you live your life with quiet strength.

    Everything good in me carries a part of you.
  </p>
  `,

  `
  <h2>If I Could Go Back</h2>
  <p>
    If I could go back, I would listen more.
    I would argue less.
    I would appreciate earlier.

    I would say thank you even when it felt unnecessary.
    I would notice the small things that mattered the most.

    Since I can’t go back, I’m writing this instead.
  </p>
  `,

  `
  <h2>Today</h2>
  <p>
    Today, I’m writing this not as a child,
    but as your son who finally understands.

    I may not always say it out loud.
    I may not always show it perfectly.

    But please know this:

    Everything I am stands on what you gave me.

    Happy Birthday, Mom.
    I love you.
  </p>
  `
];

let index = 0;

const page = document.getElementById("page");
const pageNumber = document.getElementById("pageNumber");
const wrapper = document.querySelector(".page-wrapper");

function render() {
  page.innerHTML = pages[index];
  pageNumber.textContent = `Page ${index + 1} of ${pages.length}`;
}

function turnPage(forward = true) {
  wrapper.classList.add("curling");

  setTimeout(() => {
    index = forward
      ? Math.min(index + 1, pages.length - 1)
      : Math.max(index - 1, 0);
    render();
  }, 450);

  setTimeout(() => {
    wrapper.classList.remove("curling");
  }, 900);
}

document.getElementById("next").onclick = () => {
  if (index < pages.length - 1) turnPage(true);
};

document.getElementById("prev").onclick = () => {
  if (index > 0) turnPage(false);
};

render();
