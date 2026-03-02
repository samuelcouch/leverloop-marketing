import type { BlogArticle } from '../blog';
import { posts, authors } from '../blog';

function findPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

const article: BlogArticle = {
  ...findPost('win-more-home-service-jobs'),
  publishedISO: '2026-02-28',
  authorDetail: authors['Maria Gonzalez'],
  relatedSlugs: [
    'introducing-ai-assistants',
  ],
  quickAnswer:
    'Home service contractors win more jobs in 2026 by responding to leads in minutes (not hours), presenting tiered estimates homeowners can say yes to, following up on every unsold quote, and turning finished jobs into reviews and referrals. According to ServiceTitan\'s 2025 Residential Report, 63% of contractors are growing. The gap between growing and struggling often comes down to four disciplines: speed, quoting, follow-up, and reputation.',
  whoIsThisFor: [
    'HVAC, plumbing, electrical, and pool contractors running 4 to 20 person shops who want to close more jobs',
    'Owners who are busy but know they are losing winnable jobs to slow follow-up or weak quoting',
    'Office managers handling leads, estimates, and scheduling across disconnected tools',
    'Service managers who want a repeatable system from first call to five-star review',
  ],
  keyTakeaways: [
    '78% of homeowners hire the first contractor who responds. Speed to lead is the single highest-impact improvement you can make.',
    'Thriving contractors offer Good/Better/Best estimates on over half their jobs. Struggling contractors do it less than 10% of the time.',
    'Following up on unsold estimates generates 11-15% of revenue for contractors doing $10M+. Most shops skip it entirely.',
    'Businesses with 9 or more current Google reviews earn 52% more revenue than those with fewer.',
    'Over 70% of homeowners expect a same-day response. More than half expect it within an hour.',
    'The full journey from lead to review is where jobs are won or lost, not at any single step.',
  ],
  sections: [
    {
      id: 'capture-every-lead',
      heading: 'Step 1: Capture Every Lead Before Your Competitor Does',
      content: `
          <p>Here is the number that should change how you run your morning: <strong>78% of homeowners hire the first contractor who responds to their inquiry.</strong> Not the cheapest. Not the one with the most trucks. The first one who picks up the phone or sends a text.</p>
          <p>And yet, according to Jobber's 2026 Home Service Trends Report, only 17% of HVAC contractors respond to leads within the hour. That is the slowest of any trade surveyed. If you are in HVAC, plumbing, electrical, or pool service, the bar is on the floor. Be the shop that clears it.</p>

          <h3>Speed is the new low price</h3>
          <p>Modernize's research found that responding within one minute increases lead conversion by 391%. Waiting just 30 minutes drops your odds of qualifying that lead by 21x. The math is not subtle. Every minute you wait, money walks out the door.</p>
          <p>Over 70% of homeowners expect a same-day response. More than half expect it within the hour. They are not browsing. They have a problem right now, and the shop that acknowledges it first wins the job.</p>

          <h3>Build a three-lane response system</h3>
          <p>You need three things firing when a lead comes in:</p>
          <ol>
            <li><strong>Phone calls get answered live.</strong> If you cannot staff it full-time, use an answering service during business hours. Phone leads convert at 46%, nearly six times the industry average of 7.8%.</li>
            <li><strong>Missed calls trigger an instant text.</strong> Something like: "Got your message. What is going on and what is the address?" That buys you time to call back within minutes.</li>
            <li><strong>Web form leads get a text first, then a call.</strong> Homeowners under 45 respond faster to texts than voicemails. Your auto-reply should go out within 60 seconds.</li>
          </ol>

          <p>Picture this: a "no cool" call comes into your HVAC shop at 2:05pm. Your <a href="/features/speed-to-lead">speed-to-lead system</a> texts back within 30 seconds. Your CSR calls at 2:08, confirms the address, and books a 4-6pm window. The tech shows up with the right capacitor because the notes in the <a href="/features/two-way-texting">unified inbox</a> were clean. That is how you win more home service jobs. Not with a bigger ad budget. With a faster response.</p>

          <table>
            <thead>
              <tr>
                <th>Response Time</th>
                <th>What Happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Under 1 minute</td>
                <td>391% higher conversion. You are almost certainly first.</td>
              </tr>
              <tr>
                <td>Under 5 minutes</td>
                <td>21x more likely to qualify the lead than waiting 30 minutes.</td>
              </tr>
              <tr>
                <td>Under 1 hour</td>
                <td>Still competitive, but other shops may have already called.</td>
              </tr>
              <tr>
                <td>Same day</td>
                <td>Below expectations for 70%+ of homeowners.</td>
              </tr>
              <tr>
                <td>Next day or later</td>
                <td>Most leads have already hired someone else.</td>
              </tr>
            </tbody>
          </table>
        `,
    },
    {
      id: 'present-estimates-that-close',
      heading: 'Step 2: Present Estimates That Close',
      content: `
          <p>ServiceTitan's 2025 Residential Report found that <strong>54% of thriving contractors offer Good/Better/Best estimates on at least half their jobs.</strong> Struggling contractors? Less than 10%. That gap is not a coincidence.</p>

          <h3>Homeowners want a clear decision, not a single number</h3>
          <p>When you hand someone one price and say "take it or leave it," you have given them exactly one reason to say no: the price. When you present three options, you shift the conversation from "is this worth it?" to "which one fits me best?" The middle option wins most of the time.</p>
          <p>Here is what Good/Better/Best looks like for an HVAC replacement:</p>
          <ul>
            <li><strong>Good:</strong> 14.3 SEER2 system, standard thermostat, 1-year labor warranty. Gets the job done.</li>
            <li><strong>Better:</strong> 15.2 SEER2, improved filtration, smart thermostat, 2-year labor warranty. Better comfort and efficiency.</li>
            <li><strong>Best:</strong> Variable-speed system, indoor air quality add-on, 5-year labor warranty. The "do it right the first time" option.</li>
          </ul>
          <p>Most homeowners pick Better. It feels smart without feeling excessive. Your average ticket goes up without a single hard sell. This is one of the most effective <strong>home service sales tips</strong> you can put into practice this week.</p>

          <h3>Show the work, not just the price</h3>
          <p>Housecall Pro's 2025 survey found that <strong>68% of homeowners now expect photo or video proof of work.</strong> That expectation starts at the estimate. Include photos of the existing equipment, a clear scope of what you are replacing, and plain-language descriptions of what each option includes.</p>
          <p>Spell out exclusions so there are no surprises. Put the start date and payment terms right on the estimate. Use <a href="/features/customer-approvals">digital approvals</a> so the homeowner can sign from their phone. The easier you make it to say yes, the more people will.</p>
          <p>LeverLoop's <a href="/features/good-better-best-estimates">estimate builder</a> lets you present tiered options with photos, scope details, and one-tap approval. You text the customer a link. They pick an option and sign. No chasing PDFs, no printing, no "I'll get back to you."</p>

          <table>
            <thead>
              <tr>
                <th>Estimate Approach</th>
                <th>Homeowner Reaction</th>
                <th>Close Rate Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single price, take it or leave it</td>
                <td>"Let me get another quote."</td>
                <td>Lower</td>
              </tr>
              <tr>
                <td>Good/Better/Best options</td>
                <td>"Which one fits my budget?"</td>
                <td>Higher</td>
              </tr>
              <tr>
                <td>Good/Better/Best + photos + digital approval</td>
                <td>"I will approve right now."</td>
                <td>Highest</td>
              </tr>
            </tbody>
          </table>
        `,
    },
    {
      id: 'follow-up-like-revenue-depends-on-it',
      heading: 'Step 3: Follow Up Like Revenue Depends on It',
      content: `
          <p>Here is a stat worth taping above the office phone: <strong>47% of contractors with annual revenue of $10 million or more say that following up on unsold estimates generates 11-15% of their income.</strong> That is not a rounding error. That is a truck payment every month, recovered from jobs you already quoted.</p>
          <p>Most shops send the estimate and wait. The homeowner gets busy, the quote sits in their inbox, and three weeks later they call someone else. You did the hard work of earning that lead and running the appointment. The follow-up is where you finish the job.</p>

          <h3>The 7-day follow-up cadence</h3>
          <p>Keep it simple and repeatable:</p>
          <ol>
            <li><strong>Day 0:</strong> Send the estimate. Text: "Your estimate is ready. Want to get on the schedule this week?"</li>
            <li><strong>Day 1:</strong> Short text: "Any questions I can clear up about the options?"</li>
            <li><strong>Day 3:</strong> Call with one useful piece of info, like a rebate deadline, lead time on equipment, or a warranty detail they might have missed.</li>
            <li><strong>Day 7:</strong> Final touch: "Should I close this out or keep a spot open for you?"</li>
          </ol>
          <p>This is not pushy. It is professional. Homeowners are busy, and they appreciate the reminder. The "negative option" on day 7 often gets a response because people do not want to lose their spot.</p>

          <h3>Track why you lose, then fix the real problem</h3>
          <p>Every lost job has a reason: price, timing, trust, confusion about scope, no financing option, or simply no follow-up. If 30% of your losses are "went with someone else," your speed to lead needs work. If 30% say "too expensive," your Good/Better/Best tiers might be off, or you need to offer <a href="/features/text-to-pay">financing and flexible payment</a>.</p>
          <p>LeverLoop's <a href="/features/declined-repair-follow-up">declined repair follow-up</a> and <a href="/features/automatic-follow-up">drip campaign</a> tools automate this cadence so your office does not have to remember every open quote. Set the rules once and the system runs the play for every estimate. Your <a href="/features/lead-board">pipeline board</a> shows exactly which estimates need attention right now.</p>
          <p>This is where most contractors leave the most money on the table. If you want to <strong>close more jobs as a contractor</strong>, the follow-up is often more important than the pitch.</p>
        `,
    },
    {
      id: 'turn-every-job-into-next-one',
      heading: 'Step 4: Turn Every Finished Job Into Your Next One',
      content: `
          <p>Your best marketing asset is not your website or your Google Ads budget. It is the <strong>85% of consumers who trust online reviews as much as a personal recommendation.</strong> And businesses with 9 or more current Google reviews earn 52% more revenue than those with fewer.</p>
          <p>"Current" is the key word. A pile of 5-star reviews from 2023 does not carry the same weight as steady reviews from the last 30 days. Freshness signals that you are active, reliable, and still doing good work.</p>

          <h3>Ask the same day, every time</h3>
          <p>The best moment to ask for a review is right after the job, when the homeowner is happiest. Your tech wraps up, walks through what they did, and says: "If you are happy with the work, I would really appreciate a quick Google review. I will text you the link right now."</p>
          <p>That is it. No awkward pitch. Just a direct ask backed up by an easy link. If they do not leave the review that day, send one reminder 48 hours later. Two touches, then stop.</p>
          <p>LeverLoop's <a href="/features/google-review-requests">automated review requests</a> send the link the moment a job is marked complete. No extra steps for the tech or the office.</p>

          <h3>Photos and professionalism earn referrals</h3>
          <p>Housecall Pro found that <strong>73% of homeowners would refer a contractor after an excellent experience.</strong> And over 70% would pay more for a contractor with a better service reputation. That referral starts with how you leave the job site.</p>
          <p>Before-and-after photos, a clean work area, a quick walkthrough of what you did, and a note about any maintenance the homeowner should plan for. Use LeverLoop's <a href="/features/photo-job-documentation">photo documentation</a> to capture before-and-after shots on every job. Those photos do double duty: they protect you on callbacks and they give you visual proof of quality that shows up in reviews and on your Google Business Profile.</p>
          <p>This is how you become "my HVAC guy" or "our plumber." Not through ads. Through the experience you deliver and the proof you leave behind. It is also the foundation of effective <strong>contractor lead generation</strong>, because a strong review profile brings in new calls without any ad spend.</p>
        `,
    },
    {
      id: 'how-leverloop-fits',
      heading: 'How LeverLoop Ties the Full Journey Together',
      content: `
          <p>The biggest problem in most shops is not a lack of leads or talent. It is disconnected systems. Calls come in one place, texts live in another, estimates get emailed from a laptop, and follow-up lives on a sticky note. Nobody owns the next step, and jobs fall through the cracks.</p>
          <p>LeverLoop connects the full journey from lead to review in one place:</p>
          <ul>
            <li><strong>Lead capture:</strong> LeverLoop's <a href="/features/speed-to-lead">speed-to-lead engine</a> auto-replies to every new lead in under 60 seconds and keeps follow-up moving until they book.</li>
            <li><strong>Quoting:</strong> The <a href="/features/good-better-best-estimates">estimate builder</a> presents Good/Better/Best options with photos, scope details, and one-tap digital approval.</li>
            <li><strong>Follow-up:</strong> <a href="/features/declined-repair-follow-up">Automated follow-up</a> on unsold estimates and <a href="/features/automatic-follow-up">drip campaigns</a> run your cadence without manual reminders.</li>
            <li><strong>Dispatch and field:</strong> The <a href="/features/dispatch-board">dispatch board</a> and <a href="/features/tech-app">mobile tech app</a> keep the office and field on the same page, even <a href="/features/offline-mode">offline</a>.</li>
            <li><strong>Reviews:</strong> <a href="/features/google-review-requests">Google review requests</a> go out automatically when the job is marked complete.</li>
            <li><strong>Revenue recovery:</strong> The <a href="/features/revenue-recovery-dashboard">revenue recovery dashboard</a> finds lost revenue from declined repairs and aging equipment so you can follow up on work that was already quoted.</li>
          </ul>
          <p>Every lead has an owner. Every estimate has a next action. Every completed job triggers a review request. That is the system that helps you win more home service jobs, not any single feature or tool in isolation.</p>
          <p>And LeverLoop's <a href="/features/flat-monthly-pricing">flat monthly pricing</a> means your whole team gets access. No per-seat charges. No reason to leave anyone out of the system.</p>
        `,
    },
    {
      id: 'what-to-do-next',
      heading: 'What to Do Next',
      content: `
          <p>Pick one step and start today. If you are not responding to leads in under 5 minutes, fix that first. If your estimates are single-price, take-it-or-leave-it quotes, build your first Good/Better/Best template this week. If you have not asked for a Google review in the last 7 days, ask your next customer.</p>
          <p>Then connect the full journey. <a href="#demo">Book a demo of LeverLoop</a> and see how the lead-to-review system works with nothing falling through the cracks.</p>
        `,
    },
  ],
  faq: [
    {
      question: 'How fast should I respond to a new home service lead?',
      answer:
        'As fast as possible, and under 5 minutes is the target. Research shows that 78% of homeowners hire the first contractor who responds. Responding within one minute increases conversion rates by 391% compared to waiting 30 minutes. An auto-text on missed calls is the simplest way to get faster immediately.',
    },
    {
      question:
        'Do Good/Better/Best estimates really help contractors close more jobs?',
      answer:
        'Yes. ServiceTitan\'s 2025 data shows that 54% of thriving contractors present tiered options on at least half their jobs, while struggling contractors do it less than 10% of the time. Tiered pricing shifts the conversation from "should I buy?" to "which option fits me best?" and raises average ticket size.',
    },
    {
      question:
        'How many times should I follow up after sending an estimate?',
      answer:
        'Three to four times over seven days. A text on day one, a call on day three with a specific helpful detail like a rebate deadline, and a final check-in on day seven. Keep it brief and useful. ServiceTitan found that this kind of follow-up generates 11-15% of revenue for top contractors.',
    },
    {
      question: 'What is a good close rate for home service contractors?',
      answer:
        'Jobber\'s 2026 report shows 69% of pros report a win rate above 50%, and more than a third close over 70% of quotes. If you are below 50%, improving your estimate presentation and follow-up cadence will move the needle the fastest.',
    },
    {
      question:
        'How do I get more Google reviews for my contracting business?',
      answer:
        'Ask every customer the same day the job is finished. Have your tech request the review in person, then text the Google review link immediately. Send one reminder 48 hours later if needed. Businesses with 9 or more current reviews earn 52% more revenue than those with fewer.',
    },
    {
      question:
        'What is the most effective contractor lead generation strategy in 2026?',
      answer:
        'Referrals still convert at the highest rate (35-40%), followed by phone calls from organic search (around 40% conversion). But the biggest opportunity is converting the leads you already have. Responding faster, quoting professionally with tiered options, and following up consistently will improve your conversion rate more than any new lead source.',
    },
    {
      question:
        'How do home service contractors win more jobs without lowering prices?',
      answer:
        'Compete on speed, professionalism, and follow-through instead of price. Respond to leads faster than other shops. Present tiered estimates so homeowners choose based on value, not just cost. Follow up on every unsold quote. And build a reputation through consistent reviews that justifies your pricing.',
    },
  ],
};

export default article;
