export interface WorkItem {
  number: string;
  image: string;
  alt: string;
  title: string;
  today: string;
  withAutomiq: string;
}

export interface StepItem {
  number: string;
  title: string;
  detail: string;
  hasKindPlaceholder?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  hasWhoPlaceholder?: boolean;
}

export const SITE = {
  name: 'Lokeashhwaara N Ji',
  firstName: 'Lokeashhwaara',
  initials: 'LN',
  businessName: 'Automiq',
  city: 'Chennai',
  promise: {
    beforeAccent: 'Your bookings ',
    accentWord: 'caught,',
    afterAccent: ' your reminders sent.',
  },
  whatISetUpLine:
    "I build a small booking tool that catches each request, keeps the day's list in one place, and puts the reminder out on time.",
  price: 'Rs 15,000 setup + Rs 3,000 a month',
  bookingUrl: 'https://cal.com/lokesh-atomiq/20-minute-intro-call',
  email: 'cloud.nlokesh@gmail.com',
  whatsappNumber: '',
  problemSentence:
    'You finish your work for the day, open your phone, and spend your evening answering the same booking questions, again and again, hoping no request slipped past you.',
  workItems: [
    {
      number: '01',
      image: '/work-1.jpg',
      alt: 'Booking request capture built by Automiq',
      title: 'Catch every request',
      today:
        'Booking requests arrive across calls and chats, and messages slip past when your team is busy.',
      withAutomiq:
        'A small booking tool catches each request as it arrives so nothing is left behind.',
    },
    {
      number: '02',
      image: '/work-2.jpg',
      alt: "Single day's booking list organized by Automiq",
      title: "Keep the day's list in one place",
      today:
        'Names, times, and booking notes stay scattered across different phones and notebooks.',
      withAutomiq:
        "The day's list sits together in one place for you and your staff.",
    },
    {
      number: '03',
      image: '/work-3.jpg',
      alt: 'Timely booking reminders configured by Automiq',
      title: 'Put reminders out on time',
      today:
        'Your staff has to check the schedule and send out every reminder by hand.',
      withAutomiq:
        'Reminders go out on time while you keep your own WhatsApp and your own staff.',
    },
  ] as WorkItem[],
  beforeAfter: {
    without: [
      'Booking requests sit unread in your messages while you are with customers.',
      'You piece together names and times from separate threads during the day.',
      "Your staff has to remember and send tomorrow's reminders by hand.",
      'You spend your evening sorting out who booked and who still needs a reply.',
    ],
    with: [
      'Your small booking tool catches each request as it arrives.',
      "The day's list stays together in one place for your whole team.",
      'Reminders go out on time while you keep your own WhatsApp and your own staff.',
      "Your evening stays yours because the day's bookings are already in order.",
    ],
  },
  steps: [
    {
      number: '01',
      title: 'A 20 minute call',
      detail:
        'We talk through how your bookings arrive today, how your staff manages the day, and what gets in the way.',
    },
    {
      number: '02',
      title: 'A plan for your ',
      detail:
        "I map out the small booking tool, the day's list, and the reminder schedule around your own WhatsApp and your own staff.",
      hasKindPlaceholder: true,
    },
    {
      number: '03',
      title: 'I set it up and show your team',
      detail:
        'I build the booking tool, put it in place, and walk your staff through how to use it each day.',
    },
  ] as StepItem[],
  aboutLetter:
    "I run Automiq from Chennai as one person, not an agency. When we work together, you speak directly with me from our first call through setup and beyond. I build a small booking tool that catches each request, keeps the day's list in one place, and puts the reminder out on time, while you keep your own WhatsApp and your own staff.",
  faqs: [
    {
      question: 'Who is Automiq for?',
      answer:
        "It is built for [who you help] in Chennai who want each booking request caught, the day's list kept in one place, and reminders sent on time.",
      hasWhoPlaceholder: true,
    },
    {
      question: 'What exactly do you set up?',
      answer:
        "I build a small booking tool that catches each request, keeps the day's list in one place, and puts the reminder out on time. You keep your own WhatsApp and your own staff.",
    },
    {
      question: 'How long does setup take?',
      answer:
        'We agree on the timeline together on our 20 minute call based on how your team works.',
    },
    {
      question: 'What does it cost?',
      answer:
        'The setup and monthly fee is listed in the How we start section above, and we confirm everything together on the call before starting.',
    },
    {
      question: 'How do we start?',
      answer:
        'Book a 20 minute call using any booking button on this page, or write to cloud.nlokesh@gmail.com. We talk through your bookings first and decide the plan together.',
    },
  ] as FaqItem[],
  year: 2026,
};
