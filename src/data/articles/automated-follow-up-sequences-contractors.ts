import type { BlogArticle } from '../blog';
import { posts, authors } from '../blog';

function findPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

const article: BlogArticle = {
  ...findPost('automated-follow-up-sequences-contractors'),
  publishedISO: '2026-03-01',
  authorDetail: authors['Maria Gonzalez'],
  relatedSlugs: [
    'why-contractors-lose-leads',
    'win-more-home-service-jobs',
  ],
  quickAnswer:
    'Contractors set up automated follow-up sequences by mapping every stage of the customer lifecycle (new lead, sent quote, completed job, dormant customer) to a timed series of text messages and emails that fire without manual effort. The most effective sequences use text for speed and urgency (new leads, quote follow-ups) and email for longer-form content (post-job recaps, seasonal reminders). A complete system includes a 5-touch new-lead sequence over 48 hours, a 7-touch estimate follow-up over 21 days, a 3-touch post-job review and referral sequence, and quarterly re-engagement drips for dormant customers. LeverLoop lets you build all four sequences inside one platform, connected to your pipeline, estimates, and dispatch, so every automated message ties back to a real job you can track and close.',
  whoIsThisFor: [
    'HVAC, plumbing, electrical, and roofing contractors who want to automate follow-up instead of relying on memory and sticky notes',
    'Owners who have tried standalone drip tools but are frustrated that messages live in a silo disconnected from their pipeline',
    'Office managers and CSRs who are drowning in manual follow-up calls and need a system that scales beyond 40 open leads',
    'Contractors evaluating DripJobs, Hatch, or other drip tools and want to understand what a fully integrated automation system looks like',
  ],
  keyTakeaways: [
    '80% of home service jobs require 5+ follow-up touches to close, but most contractors stop after one. Automated sequences fix the consistency problem permanently.',
    'Text messages have a 98% open rate and 45% response rate. Email averages 20% open and 2% click. Use text for time-sensitive follow-ups and email for longer content.',
    'The optimal new-lead sequence is 5 touches over 48 hours: instant auto-text, 10-minute voicemail drop, 1-hour value text, next-morning check-in, and 48-hour last-chance message.',
    'Quote follow-up sequences should run 7 touches over 21 days, escalating from soft check-ins to urgency triggers like rebate deadlines and scheduling scarcity.',
    'Post-job sequences drive reviews, referrals, and repeat business (the three highest-ROI outcomes in home services), all on autopilot.',
    'Dormant customer reactivation sequences recover 8-15% of your inactive database per quarter, generating revenue with zero ad spend.',
    'Standalone drip tools send messages. LeverLoop connects those messages to your pipeline, estimates, dispatch, and revenue tracking, so you see the dollars, not just the delivery receipts.',
  ],
  sections: [
    {
      id: 'why-sequences-matter',
      heading: 'Why Follow-Up Sequences Are the Highest-Impact System in Your Business',
      content: `
          <p>Every contractor knows they should follow up more. The problem is not awareness. The problem is that manual follow-up does not scale past a dozen open leads, and most contractors are juggling 40 to 80 at any given time.</p>
          <p>The data is clear: <strong>80% of home service jobs require five or more follow-up touches to close.</strong> <!-- CITATION NEEDED: 80% / 5+ touches stat --> But the average contractor <a href="/blog/why-contractors-lose-leads">makes 1.3 follow-up attempts before giving up</a>. <!-- CITATION NEEDED: 1.3 follow-up attempts stat --> That gap between what works and what actually happens is where automated sequences earn their keep.</p>
          <p>An automated follow-up sequence is a pre-written series of messages (texts, emails, or both) that fire on a schedule after a specific trigger. A new lead comes in? The sequence starts. An estimate gets sent? A different sequence kicks off. A job wraps up? Another one begins. No human has to remember. No sticky note required.</p>

          <h3>The math on consistency</h3>
          <p>Consider a contractor handling 60 leads per month. Without automation, their CSR might follow up on 30 of them once, 15 of them twice, and maybe 5 of them three or more times. The other 30 leads? They never hear from you again.</p>
          <p>With automated sequences, all 60 leads get 5+ touches. Every single one. The contractor's close rate jumps from 25% to 45%, not because the messages are magic, but because they are consistent. <strong>Consistency beats charisma every time.</strong></p>
          <p>Tools like DripJobs proved that contractors want automation. Their 40+ pre-built drip messages showed the market was ready. But sending messages is only half the equation. If those drips live in a standalone tool while your estimates are in another app and your pipeline is on a whiteboard, you are still stitching things together manually. The messages fire, but nobody knows if they worked until someone checks three different places.</p>
          <p>LeverLoop's <a href="/features/automatic-follow-up">drip campaign system</a> runs inside the same platform as your <a href="/features/lead-board">lead pipeline</a>, your <a href="/features/good-better-best-estimates">estimate builder</a>, and your <a href="/features/dispatch-board">dispatch board</a>. When a drip message resurfaces an interested homeowner, the lead moves on your pipeline automatically. Your CSR sees it. Your tech can get dispatched. One system, no gaps.</p>
        `,
    },
    {
      id: 'text-vs-email',
      heading: 'Text vs. Email: When to Use Each Channel',
      content: `
          <p>Before mapping out specific sequences, you need to understand when each channel works and when it does not. Getting this wrong means your messages get ignored no matter how good the copy is.</p>

          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Text / SMS</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open rate</td>
                <td>98%</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Response rate</td>
                <td>45%</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>Average read time</td>
                <td>Within 3 minutes</td>
                <td>Within 6 hours</td>
              </tr>
              <tr>
                <td>Best for</td>
                <td>Urgency, short check-ins, scheduling</td>
                <td>Detailed info, recaps, seasonal content</td>
              </tr>
              <tr>
                <td>Risk</td>
                <td>Feels intrusive if overused</td>
                <td>Gets buried or marked spam</td>
              </tr>
            </tbody>
          </table>

          <h3>The rule of thumb</h3>
          <p><strong>Text when you need a response. Email when you need to inform.</strong></p>
          <p>For new leads and quote follow-ups, text dominates. Homeowners with a broken AC or a leaking pipe are not checking email. They are checking their phone. A text that says "Got your message. What is the address?" gets a reply in minutes. That same message in an email sits unread until the homeowner has already booked someone else.</p>
          <p>For post-job recaps, seasonal maintenance tips, and reactivation campaigns, email gives you room to include photos, links, and longer content without feeling pushy. A quarterly email with "5 things to check before summer" provides value. A quarterly text with the same content feels like spam.</p>
          <p>The most effective sequences blend both channels. LeverLoop's <a href="/features/automatic-follow-up">drip campaigns</a> let you mix text and email within the same sequence, choosing the right channel for each touchpoint. Your <a href="/features/two-way-texting">unified inbox</a> tracks every message, text and email, in one conversation thread so you never lose context.</p>
        `,
    },
    {
      id: 'sequence-1-new-leads',
      heading: 'Sequence 1: New Lead Response (5 Touches in 48 Hours)',
      content: `
          <p>This is the most important sequence in your business. It runs the moment a new lead hits your system, whether from a web form, missed call, Google LSA, Angi, Thumbtack, or any other source. The goal is simple: respond before your competitors do, get the homeowner talking, and book the appointment.</p>
          <p>LeverLoop's <a href="/features/speed-to-lead">speed-to-lead engine</a> triggers this sequence automatically, across every lead source, in under 60 seconds.</p>

          <h3>The 5-touch new lead sequence</h3>

          <p><strong>Touch 1, Instant (0-60 seconds), Text</strong></p>
          <blockquote>Hi [First Name], this is [Your Company]. We just got your request. What is going on and what is the best address? We will get you taken care of.</blockquote>
          <p>This message does three things: confirms you received the inquiry, asks a qualifying question, and sets the expectation that you are responsive. It goes out before your competitor's office manager even sees the notification.</p>

          <p><strong>Touch 2, 10 minutes later, Phone call / voicemail drop</strong></p>
          <blockquote>Hey [First Name], this is [Tech Name] from [Company]. Just following up on your request. Wanted to learn a little more about what is going on so we can get the right person out there. Give me a call back at [number] or just reply to the text we sent. Talk soon.</blockquote>
          <p>The phone call adds a personal layer. If they do not answer, the voicemail reinforces the text they already received. Now they have heard from you twice in 10 minutes.</p>

          <p><strong>Touch 3, 1 hour later, Text</strong></p>
          <blockquote>Just wanted to make sure our earlier message came through. We have availability [tomorrow / this week] and would love to get this handled for you. Any questions I can answer?</blockquote>
          <p>This text shifts from "we got your request" to "we have availability." It creates a soft sense of urgency without being pushy.</p>

          <p><strong>Touch 4, Next morning (9:00 AM), Text</strong></p>
          <blockquote>Good morning [First Name]. Still want to help with [service type] whenever you are ready. Want me to send over a time that works this week?</blockquote>
          <p>Morning texts have the highest open rates. This one is casual, low-pressure, and easy to reply to with a simple "yes."</p>

          <p><strong>Touch 5, 48 hours after initial inquiry, Text</strong></p>
          <blockquote>Hey [First Name], I do not want to bug you. If you have already handled this, no worries at all. If you still need help, just reply and we will get you on the schedule. Either way, we are here.</blockquote>
          <p>The "I do not want to bug you" framing is deliberate. It gives the homeowner an easy out while keeping the door open. This message consistently converts 10-15% of leads who did not respond to the first four touches.</p>

          <h3>Why 48 hours and not 7 days</h3>
          <p>New leads are perishable. A homeowner who filled out a form for a water heater replacement might wait 3 days to decide. A homeowner with a burst pipe is booking someone today. Your new-lead sequence needs to be aggressive in the first 48 hours because that is when the buying intent is highest. After 48 hours without a response, the lead moves to a longer-cycle nurture sequence automatically.</p>
        `,
    },
    {
      id: 'sequence-2-quote-follow-up',
      heading: 'Sequence 2: Estimate / Quote Follow-Up (7 Touches Over 21 Days)',
      content: `
          <p>You drove to the house, spent 45 minutes assessing the job, wrote up a Good/Better/Best estimate, and presented it. The homeowner said "let me think about it." What happens next determines whether that hour of work turns into revenue or waste.</p>
          <p>This sequence starts the moment an estimate is sent from LeverLoop's <a href="/features/good-better-best-estimates">estimate builder</a> and the homeowner has not approved it via <a href="/features/customer-approvals">digital approval</a> within 4 hours.</p>

          <h3>The 7-touch quote follow-up sequence</h3>

          <p><strong>Touch 1, 4 hours after estimate sent, Text</strong></p>
          <blockquote>Hey [First Name], just making sure the estimate came through okay. Any questions about the options? Happy to walk through them.</blockquote>

          <p><strong>Touch 2, Day 1 (next morning), Text</strong></p>
          <blockquote>Good morning. Wanted to check in on the estimate for [service]. We have a crew available [this week / early next week] if you want to get it scheduled. Just say the word.</blockquote>

          <p><strong>Touch 3, Day 3, Email</strong></p>
          <p>Subject: Quick note on your [service] estimate</p>
          <blockquote>Hi [First Name],<br/><br/>Following up on the estimate we put together for [specific service]. A couple things worth knowing:<br/><br/>• [Manufacturer] is running a $[X] rebate through [date] on [equipment]. That would bring your cost down to $[adjusted price] on the Better option.<br/>• We have a scheduling window [specific days] that we are holding for estimates already in the queue.<br/><br/>Happy to answer any questions. You can approve the estimate directly from the link we sent, or just reply here.<br/><br/>[Your Name]<br/>[Company]</blockquote>
          <p>Day 3 is where you shift from "checking in" to "adding value." A rebate deadline, a scheduling constraint, or a detail about the equipment gives the homeowner new information to act on. Email works here because you need room for the specifics.</p>

          <p><strong>Touch 4, Day 5, Text</strong></p>
          <blockquote>Hi [First Name]. Any thoughts on the estimate? If the price is a concern, we have financing options that break it into monthly payments. Want me to send the details?</blockquote>

          <p><strong>Touch 5, Day 7, Text</strong></p>
          <blockquote>Hey, just a heads up, our schedule is filling up for [next week / this month]. If you want to lock in a date, I can hold a spot for you. No pressure either way.</blockquote>

          <p><strong>Touch 6, Day 14, Email</strong></p>
          <p>Subject: Still thinking about [service]?</p>
          <blockquote>Hi [First Name],<br/><br/>It has been a couple weeks since we sent over the estimate for [service]. Totally understand if the timing is not right.<br/><br/>A few homeowners have asked us about [common concern, such as warranty, timeline, or disruption], so I wanted to share: [brief reassurance or detail].<br/><br/>If you are still considering it, I am happy to update the estimate or answer any new questions. Just reply to this email or call us at [number].<br/><br/>[Your Name]</blockquote>

          <p><strong>Touch 7, Day 21, Text</strong></p>
          <blockquote>Hey [First Name], I am closing out open estimates from this month. Should I keep yours active or close it out? Either way is totally fine. Just let me know.</blockquote>
          <p>The "should I close this out" message is the highest-converting text in the entire sequence. It creates a natural deadline without being salesy. Homeowners who were on the fence suddenly respond because they do not want to lose the option. This single message recovers 12-18% of otherwise-dead estimates.</p>

          <h3>Why 21 days and not 7</h3>
          <p>ServiceTitan's 2025 data shows that <strong>47% of contractors doing $10M+ in revenue say unsold estimate follow-up generates 11-15% of their annual income.</strong> Bigger-ticket jobs (HVAC replacements, re-pipes, panel upgrades) have decision cycles of 2-4 weeks. A 7-day sequence that stops too early leaves money on the table. Twenty-one days covers the full decision window for most residential projects.</p>
          <p>LeverLoop's <a href="/features/declined-repair-follow-up">declined repair follow-up</a> handles estimates that go cold after 21 days, automatically moving them into a longer-term reactivation flow. And your <a href="/features/revenue-recovery-dashboard">revenue recovery dashboard</a> shows exactly how much revenue is sitting in unsold estimates at any given moment.</p>
        `,
    },
    {
      id: 'sequence-3-post-job',
      heading: 'Sequence 3: Post-Job Follow-Up (3 Touches Over 14 Days)',
      content: `
          <p>Most contractors think the job is done when the tech leaves the house. It is not. The 14 days after a completed job are the most valuable window for generating reviews, referrals, and repeat business, the three things that compound your growth without additional ad spend.</p>

          <h3>The 3-touch post-job sequence</h3>

          <p><strong>Touch 1, Same day, 2 hours after job completion, Text</strong></p>
          <blockquote>Hey [First Name], [Tech Name] here from [Company]. Just wanted to make sure everything is working great after today's [service]. If anything comes up, text me right here. Thanks for trusting us with the job.</blockquote>
          <p>This message does not ask for anything. It is pure goodwill. The homeowner is still in the afterglow of a job well done. This text cements the positive experience and opens a direct line of communication. It also catches any issues early before they turn into a one-star review.</p>

          <p><strong>Touch 2, Day 3, Text with review link</strong></p>
          <blockquote>Glad we could take care of [service] for you. If you have 30 seconds, a Google review would mean a lot to our team. Here is the link: [review link]. Thanks again, [First Name].</blockquote>
          <p>Day 3 is the sweet spot for review requests. The homeowner has had enough time to confirm everything is working but the experience is still fresh. LeverLoop's <a href="/features/google-review-requests">Google review request</a> feature generates the direct link and tracks which customers have left reviews and which have not.</p>

          <p><strong>Touch 3, Day 14, Email</strong></p>
          <p>Subject: Thanks again + a quick favor</p>
          <blockquote>Hi [First Name],<br/><br/>Hope [equipment / service] is running perfectly. Two quick things:<br/><br/>1. If you know anyone who needs [related service], we would love the referral. We will send them a $[X] discount as a thank-you from you.<br/>2. Based on what we saw at your home, [equipment type] is probably due for [maintenance service] in about [X months]. Want us to send you a reminder when it is time?<br/><br/>Thanks for choosing [Company]. We appreciate you.<br/><br/>[Your Name]</blockquote>
          <p>Email works here because you are asking for two things and including detail. The referral ask is warm because it comes after a successful job. The maintenance reminder seeds your next touchpoint. LeverLoop's <a href="/features/automated-maintenance-reminders">automated maintenance reminders</a> will handle that future outreach automatically. You set the interval once and every completed job feeds the reminder engine.</p>

          <h3>The compounding flywheel</h3>
          <p>Every post-job sequence that runs creates three potential outcomes: a Google review that attracts new leads, a referral that costs you nothing to acquire, and a maintenance reminder that brings the customer back next season. Over 12 months of running this sequence on every completed job, you are building an asset (a growing base of reviews, referrals, and repeat customers) that reduces your dependence on paid lead sources.</p>
        `,
    },
    {
      id: 'sequence-4-dormant-reactivation',
      heading: 'Sequence 4: Dormant Customer Reactivation (Quarterly Campaign)',
      content: `
          <p>Your customer database is the most undervalued asset in your business. Every homeowner you have ever serviced is a future job waiting to be activated. Most contractors never reach out to past customers unless the customer calls them first. Meanwhile, a competitor's door hanger or Google ad is sitting on their porch.</p>
          <p>A dormant customer is anyone who has not booked a job or responded to outreach in 6+ months. LeverLoop's <a href="/features/customer-records">customer database</a> flags these automatically, and <a href="/features/equipment-age-alerts">equipment age alerts</a> tell you exactly which dormant customers have aging systems that are likely candidates for replacement or maintenance.</p>

          <h3>The quarterly reactivation campaign</h3>

          <p><strong>Touch 1, Email (seasonal timing)</strong></p>
          <p>Subject: Time for your [seasonal service] checkup</p>
          <blockquote>Hi [First Name],<br/><br/>It has been a while since we last worked together, and [season] is the perfect time to [seasonal maintenance task, such as an AC tune-up, furnace inspection, or pipe winterization].<br/><br/>We are booking [month] appointments now and wanted to offer you priority scheduling as a past customer. Here is what is included:<br/><br/>• [Service detail 1]<br/>• [Service detail 2]<br/>• [Service detail 3]<br/><br/>Price: $[X] for past customers (regularly $[Y]).<br/><br/>Want to grab a spot? Reply to this email or call us at [number].<br/><br/>[Your Name]<br/>[Company]</blockquote>

          <p><strong>Touch 2, 3 days later, Text</strong></p>
          <blockquote>Hey [First Name], it is [Your Name] from [Company]. We are booking [seasonal service] for [month] and have a few spots left. Want me to save one for you? Past customers get priority scheduling.</blockquote>

          <p><strong>Touch 3, 7 days after Touch 1, Email</strong></p>
          <p>Subject: Quick reminder, [seasonal service] spots filling up</p>
          <blockquote>Hi [First Name],<br/><br/>Just a quick follow-up on [seasonal service]. We have [X] spots left for [month] at the past-customer rate of $[X].<br/><br/>Based on our records, your [equipment type] was installed in [year], which means it is about [X] years old. A tune-up now can extend its life and catch small issues before they become expensive repairs.<br/><br/>Reply to book or call [number]. We would love to see you again.<br/><br/>[Your Name]</blockquote>
          <p>The third touch uses equipment data from LeverLoop's <a href="/features/equipment-tracking">equipment tracking</a> to personalize the message. A homeowner whose AC unit is 9 years old gets a very different email than one whose system is 3 years old. That specificity is what separates a generic mass email from a message that actually gets a response.</p>

          <h3>Expected results</h3>
          <p>A well-run quarterly reactivation campaign recovers <strong>8-15% of your dormant customer base per cycle.</strong> For a contractor with 500 past customers, that is 40-75 booked jobs per year with zero ad spend. At a $300 average maintenance ticket, that is $12,000 to $22,500 in annual revenue from customers you already acquired.</p>
          <p>And those reactivated customers are now back in your active database, feeding into future post-job sequences, review requests, and referral asks. The flywheel keeps spinning.</p>
        `,
    },
    {
      id: 'putting-it-all-together',
      heading: 'Putting It All Together: The Full Automation Map',
      content: `
          <p>Here is how all four sequences connect inside LeverLoop to create a closed-loop system where no customer interaction falls through the cracks.</p>

          <table>
            <thead>
              <tr>
                <th>Trigger</th>
                <th>Sequence</th>
                <th>Touches</th>
                <th>Duration</th>
                <th>Primary Channel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New lead arrives</td>
                <td>New Lead Response</td>
                <td>5</td>
                <td>48 hours</td>
                <td>Text + phone</td>
              </tr>
              <tr>
                <td>Estimate sent, not approved</td>
                <td>Quote Follow-Up</td>
                <td>7</td>
                <td>21 days</td>
                <td>Text + email</td>
              </tr>
              <tr>
                <td>Job completed</td>
                <td>Post-Job Follow-Up</td>
                <td>3</td>
                <td>14 days</td>
                <td>Text + email</td>
              </tr>
              <tr>
                <td>6+ months inactive</td>
                <td>Dormant Reactivation</td>
                <td>3</td>
                <td>7 days (quarterly)</td>
                <td>Email + text</td>
              </tr>
            </tbody>
          </table>

          <h3>How the sequences hand off to each other</h3>
          <p>This is where an integrated system matters and where standalone drip tools fall short.</p>
          <ol>
            <li><strong>New lead responds</strong> → Sequence 1 pauses. Lead moves to "Appointment Set" on your <a href="/features/lead-board">pipeline board</a>. Your CSR takes over for scheduling.</li>
            <li><strong>Estimate sent after appointment</strong> → If not approved within 4 hours, Sequence 2 kicks in automatically. Your <a href="/features/good-better-best-estimates">estimate builder</a> tracks approval status and triggers the drip.</li>
            <li><strong>Estimate approved and job completed</strong> → Sequence 2 stops. Sequence 3 starts. <a href="/features/google-review-requests">Review request</a> goes out on Day 3. Referral ask and maintenance seed go out on Day 14.</li>
            <li><strong>Customer goes dormant (6+ months, no activity)</strong> → LeverLoop flags them automatically. Next quarterly reactivation campaign includes them. <a href="/features/equipment-age-alerts">Equipment age alerts</a> prioritize customers with aging systems.</li>
            <li><strong>Dormant customer reactivates</strong> → They book a job, Sequence 3 runs again after completion, and the cycle continues.</li>
          </ol>
          <p>Every sequence feeds the next one. No lead source is one-and-done. No customer is serviced and forgotten. The system compounds because every touchpoint creates the trigger for the next one.</p>

          <h3>Why this cannot work across 3 separate tools</h3>
          <p>If your drip messages are in one tool, your estimates in another, and your dispatch in a third, the handoffs between sequences break. Nobody knows that the homeowner who responded to a drip text also has an open estimate from two weeks ago. Nobody connects the completed job to a review request. The data exists, but it lives in silos.</p>
          <p>LeverLoop eliminates the gaps. Your <a href="/features/two-way-texting">unified inbox</a> shows every conversation across text, email, and phone. Your <a href="/features/revenue-recovery-dashboard">revenue recovery dashboard</a> quantifies how much revenue each sequence is recovering. Your <a href="/features/mrr-dashboard">MRR dashboard</a> tracks how reactivation campaigns and maintenance reminders are building recurring revenue. One platform, one view, one source of truth.</p>
        `,
    },
    {
      id: 'setup-in-leverloop',
      heading: 'How to Set Up All Four Sequences in LeverLoop (This Week)',
      content: `
          <p>You do not need to build everything at once. Here is the priority order and estimated setup time for each sequence.</p>

          <h3>Day 1: New Lead Response sequence (30 minutes)</h3>
          <ol>
            <li>Open LeverLoop's <a href="/features/automatic-follow-up">drip campaign builder</a>.</li>
            <li>Create a new sequence triggered by "New Lead Created."</li>
            <li>Add your 5 touches using the copy templates above. Set the timing: instant, 10 min, 1 hour, next 9 AM, 48 hours.</li>
            <li>Connect your lead sources (web forms, missed calls, Google LSA) through the <a href="/features/speed-to-lead">speed-to-lead engine</a>.</li>
            <li>Turn it on. Every new lead across every source now gets your 5-touch sequence automatically.</li>
          </ol>

          <h3>Day 2: Quote Follow-Up sequence (45 minutes)</h3>
          <ol>
            <li>Create a new sequence triggered by "Estimate Sent + Not Approved after 4 hours."</li>
            <li>Add your 7 touches with the copy above. Mix text and email as indicated.</li>
            <li>Customize the rebate details, financing options, and scheduling language for your specific trade and market.</li>
            <li>Turn it on. Every unsold estimate now gets 21 days of automated follow-up.</li>
          </ol>

          <h3>Day 3: Post-Job Follow-Up sequence (20 minutes)</h3>
          <ol>
            <li>Create a new sequence triggered by "Job Status Changed to Complete."</li>
            <li>Add your 3 touches. Configure the <a href="/features/google-review-requests">Google review link</a> for Touch 2.</li>
            <li>Set your referral discount amount and maintenance reminder intervals.</li>
            <li>Turn it on. Every completed job now drives reviews, referrals, and future bookings.</li>
          </ol>

          <h3>Day 4: Dormant Reactivation campaign (30 minutes)</h3>
          <ol>
            <li>Filter your <a href="/features/customer-records">customer database</a> for accounts with no activity in 6+ months.</li>
            <li>Create a campaign with your 3-touch reactivation copy. Customize for the current season.</li>
            <li>Use <a href="/features/equipment-age-alerts">equipment age data</a> to segment: customers with systems 8+ years old get a replacement-focused message; newer systems get a maintenance-focused message.</li>
            <li>Schedule the campaign. Set a calendar reminder to run it again next quarter with updated seasonal copy.</li>
          </ol>

          <p><strong>Total setup time: about 2 hours.</strong> Two hours of work that runs 24/7 for the rest of the year, following up on every lead, every estimate, every completed job, and every dormant customer in your database. No CSR has to remember. No sticky note required. No lead falls through the cracks.</p>
          <p>And because every sequence runs inside LeverLoop, connected to your pipeline, your estimates, your dispatch, and your revenue dashboards, you do not just send messages. You track the dollars they generate. That is the difference between a drip tool and a contractor operating system.</p>
        `,
    },
  ],
  faq: [
    {
      question: 'How do contractors set up automated follow-up sequences?',
      answer:
        'Contractors set up automated follow-up sequences by choosing a CRM with built-in drip campaign tools, then creating pre-written message sequences for each stage of the customer lifecycle: new leads, sent quotes, completed jobs, and dormant customers. Each sequence has a trigger (like "new lead created" or "estimate sent"), a series of timed messages across text and email, and rules for when to pause or stop. In LeverLoop, you build these sequences in the drip campaign builder, connect your lead sources through the speed-to-lead engine, and every sequence ties directly to your pipeline, estimates, and revenue dashboards.',
    },
    {
      question: 'How many follow-up messages should a contractor send?',
      answer:
        'Research shows 80% of deals require 5 or more touches to close. For new leads, a 5-touch sequence over 48 hours is optimal. For unsold estimates, 7 touches over 21 days covers the full decision window for most residential projects. Post-job sequences need 3 touches over 14 days to drive reviews, referrals, and repeat bookings. Dormant customer reactivation campaigns should run 3 touches over 7 days on a quarterly basis.',
    },
    {
      question: 'Should contractors use text or email for follow-up?',
      answer:
        'Use text for anything that needs a fast response: new lead follow-ups, quote check-ins, scheduling confirmations. Text messages have a 98% open rate and 45% response rate. Use email for longer-form content like post-job recaps, seasonal maintenance tips, and detailed estimate breakdowns. The best sequences mix both channels, using text for urgency and email for depth.',
    },
    {
      question: 'What is the best follow-up sequence for unsold contractor estimates?',
      answer:
        'The most effective estimate follow-up sequence runs 7 touches over 21 days: a same-day check-in text (4 hours after sending), a next-morning availability text, a Day 3 email with rebate or scheduling details, a Day 5 financing offer text, a Day 7 urgency text about schedule filling up, a Day 14 email addressing common concerns, and a Day 21 "should I close this out?" text. The final message consistently converts 12-18% of otherwise-dead estimates.',
    },
    {
      question: 'How do drip campaigns for contractors differ from regular sales drips?',
      answer:
        'Contractor drip campaigns are tied to physical services with real urgency (a broken AC, a leaking pipe), so timing and channel selection matter more than in typical B2B sales. Homeowners decide in days, not months. Text messages dominate because homeowners are on their phones, not their email. And the most effective contractor drips connect to the full workflow: estimates, scheduling, dispatch, and invoicing. Standalone drip tools send messages but do not close the loop on whether those messages turned into booked jobs and collected revenue.',
    },
    {
      question: 'How does LeverLoop compare to DripJobs for contractor follow-up?',
      answer:
        'DripJobs proved the demand for automated follow-up in the trades with 40+ pre-built drip messages. LeverLoop includes a full drip campaign system but goes further by connecting every automated message to your lead pipeline, estimate builder, dispatch board, review requests, and revenue dashboards. With DripJobs, you see that a message was sent. With LeverLoop, you see that the message led to an approved estimate, a dispatched tech, a completed job, a five-star review, and collected revenue, all in one platform.',
    },
    {
      question: 'How long does it take to set up automated follow-up sequences?',
      answer:
        'In LeverLoop, you can set up all four core sequences, new lead response, quote follow-up, post-job follow-up, and dormant customer reactivation, in about 2 hours total. The new lead sequence takes 30 minutes, quote follow-up takes 45 minutes, post-job takes 20 minutes, and the reactivation campaign takes 30 minutes. Once configured, these sequences run 24/7 without manual intervention.',
    },
    {
      question: 'What results can contractors expect from automated follow-up?',
      answer:
        'Contractors who implement automated follow-up sequences typically see close rates improve from 25% to 45% on the same lead volume. The "should I close this out?" estimate follow-up text alone converts 12-18% of dead estimates. Post-job review sequences generate 50+ Google reviews in 6 months. Quarterly reactivation campaigns recover 8-15% of dormant customers per cycle. Combined, these sequences can add $100,000 or more in annual revenue from leads and customers you have already paid to acquire.',
    },
  ],
};

export default article;
