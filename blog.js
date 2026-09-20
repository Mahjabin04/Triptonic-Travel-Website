(function () {
  const posts = {
    "sundarbans": {
      title: "Sundarbans First Timer Guide: Permits, Packing, and a Realistic 2-Day Plan",
      dek: "A practical guide for a safe, comfortable forest cruise, including what to pack, what tours actually feel like, and how to avoid common mistakes.",
      date: "May, 2025",
      author: "admin",
      category: "Nature",
      readTime: "6 min read",
      heroBg: "images/blog1.jpg",
      ctaPlace: "Forests & Wildlife",
      contentHtml: `
        <p class="lead">The Sundarbans is not a typical “hiking” trip. It is a boat-first journey through rivers, mangroves, and watchtowers. If you plan for humidity, insects, and timing, it becomes one of the most memorable trips in Bangladesh.</p>
        <h2>Before you go</h2>
        <div class="callout">
          <h3>What to confirm with your tour</h3>
          <ul>
            <li>Entry permissions and forest station procedures</li>
            <li>Boat safety equipment and guide arrangement</li>
            <li>Sleeping setup (cabin, deck, or nearby stay)</li>
            <li>Meals, drinking water, and stop schedule</li>
          </ul>
        </div>

        <h2>What to pack (the short list)</h2>
        <ul class="checklist">
          <li>Light rain protection (poncho or jacket)</li>
          <li>Insect repellent and sunscreen</li>
          <li>Closed shoes plus one easy sandal</li>
          <li>Power bank, flashlight, and a small dry bag</li>
          <li>Basic medicine and motion sickness tablets (if needed)</li>
        </ul>

        <h2>A realistic 2-day plan</h2>
        <h3>Day 1</h3>
        <ul>
          <li>Depart early, settle into the boat, safety briefing</li>
          <li>First watchtower or short forest walk (depending on timing)</li>
          <li>Evening on the river, calm light, great for photos</li>
        </ul>

        <h3>Day 2</h3>
        <ul>
          <li>Early movement for cooler air and better wildlife chances</li>
          <li>Second watchtower stop, return by afternoon</li>
          <li>Back to the city with enough buffer for traffic</li>
        </ul>

        <h2>Comfort and safety tips</h2>
        <ul>
          <li>Do not overpack. Keep essentials in one small bag you can reach quickly.</li>
          <li>Wear light long sleeves for sun and insects, especially on decks.</li>
          <li>Wildlife is not guaranteed. The experience is the landscape and river life.</li>
        </ul>

        <blockquote>
          The best Sundarbans trips feel slow, calm, and organized. The goal is not to rush, it is to be comfortable and present.
        </blockquote>
      `
    },

    "coxs-bazar-quiet-spots": {
      title: "Cox’s Bazar Without the Rush: Quiet Spots, Inani Timing, and a Clean 2-Day Flow",
      dek: "A calmer way to do Cox’s Bazar, with time windows that avoid peak crowds and still deliver the best sunsets.",
      date: "June, 2025",
      author: "admin",
      category: "Coast",
      readTime: "5 min read",
      heroBg: "images/blog2.jpg",
      ctaPlace: "Beaches & Coastlines",
      contentHtml: `
        <p class="lead">Cox’s Bazar can feel crowded if you follow the default routine. The trick is timing. Start earlier, rest at midday, and place your sunset window at the right spot.</p>

        <h2>Quick plan overview</h2>
        <div class="two-col">
          <div class="card-mini">
            <h3>Best for</h3>
            <p>Families and friends who want comfort and calm travel, not a packed checklist.</p>
          </div>
          <div class="card-mini">
            <h3>Suggested duration</h3>
            <p>2 days is enough for a relaxed beach trip with one coastal side visit.</p>
          </div>
        </div>

        <h2>Day 1: Settle, then sunset</h2>
        <ul>
          <li>Check-in, rest, then beach walk in late afternoon</li>
          <li>Pick a sunset window and arrive a little early</li>
          <li>Dinner: seafood is popular, but choose clean and well reviewed places</li>
        </ul>

        <h2>Day 2: Inani or Himchari, then back</h2>
        <ul>
          <li>Go early for cooler air and clearer photos</li>
          <li>Keep stops simple: one main spot, a few short photo breaks</li>
          <li>Return by evening with buffer time</li>
        </ul>

        <h2>Clean travel tips</h2>
        <ul class="checklist">
          <li>Carry sandals plus a light shoe for walking</li>
          <li>Keep a small towel and wet wipes for comfort</li>
          <li>Stay hydrated, especially when the sun is strong</li>
          <li>Do not schedule too many stops, it increases fatigue</li>
        </ul>

        <blockquote>
          A good Cox’s Bazar trip is mostly timing. Comfort planning beats rushing every time.
        </blockquote>
      `
    },

    "sylhet-tea-weekend": {
      title: "Sylhet Tea Country Weekend: A Calm 48-Hour Route for Tea Gardens and River Views",
      dek: "A simple weekend plan that focuses on tea gardens, light nature stops, and a comfortable pace for families and friends.",
      date: "December, 2025",
      author: "admin",
      category: "Highlands",
      readTime: "6 min read",
      heroBg: "images/blog3.jpg",
      ctaPlace: "Tea Gardens & Highlands",
      contentHtml: `
        <p class="lead">Sylhet is best when you do less. Pick two or three strong spots, keep travel windows realistic, and leave time for tea gardens and slow evenings.</p>

        <h2>48-hour route (simple and realistic)</h2>
        <h3>Day 1</h3>
        <ul>
          <li>Tea garden visit in the afternoon light</li>
          <li>Short viewpoint stop, then rest</li>
          <li>Evening walk and dinner near your stay</li>
        </ul>

        <h3>Day 2</h3>
        <ul>
          <li>One nature stop based on season (river view or hill viewpoint)</li>
          <li>Lunch with buffer time for return</li>
          <li>Head back without squeezing extra stops</li>
        </ul>

        <h2>What to pack</h2>
        <ul class="checklist">
          <li>Light jacket for mornings and evenings</li>
          <li>Comfort shoes for short walks</li>
          <li>Cash for small local purchases</li>
          <li>Water and a small umbrella in case of sudden rain</li>
        </ul>

        <h2>Who this is best for</h2>
        <div class="callout">
          <p>Families, couples, and friends who want a quiet reset. If your group wants fast adventure, hills or forests fit better.</p>
        </div>

        <blockquote>
          Sylhet feels best when your plan includes rest. The calm is the point.
        </blockquote>
      `
    }
  };

  function getPostKey() {
    const params = new URLSearchParams(window.location.search);
    return (params.get("post") || "sundarbans").trim();
  }

  const postKey = getPostKey();
  const post = posts[postKey] || posts["sundarbans"];

  const titleEl = document.getElementById("blogTitle");
  const breadcrumbEl = document.getElementById("blogBreadcrumbTitle");
  const dateEl = document.getElementById("blogDate");
  const authorEl = document.getElementById("blogAuthor");
  const categoryEl = document.getElementById("blogCategory");
  const readTimeEl = document.getElementById("blogReadTime");
  const dekEl = document.getElementById("blogDek");
  const heroMediaEl = document.getElementById("blogHeroMedia");
  const contentEl = document.getElementById("blogContent");
  const ctaBtn1 = document.getElementById("blogCtaBtn");
  const ctaBtn2 = document.getElementById("blogCtaBtn2");

  if (titleEl) titleEl.textContent = post.title;
  if (breadcrumbEl) breadcrumbEl.textContent = post.title;
  if (dateEl) dateEl.textContent = post.date;
  if (authorEl) authorEl.textContent = post.author;
  if (categoryEl) categoryEl.textContent = post.category;
  if (readTimeEl) readTimeEl.textContent = post.readTime;
  if (dekEl) dekEl.textContent = post.dek;
  if (heroMediaEl) heroMediaEl.style.backgroundImage = `url('${post.heroBg}')`;
  if (contentEl) contentEl.innerHTML = post.contentHtml;

  const ctaHref = `index.html?place=${encodeURIComponent(post.ctaPlace)}#book-form`;
  if (ctaBtn1) ctaBtn1.href = ctaHref;
  if (ctaBtn2) ctaBtn2.href = ctaHref;

  document.title = `TripTonic | ${post.title}`;

  // Reading progress bar
  const bar = document.getElementById("readProgressBar");
  function updateProgress() {
    if (!bar) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
})();
