import {MotionConfig} from 'motion/react';
import {AboutSection} from './components/AboutSection';
import {BeforeAfterSection} from './components/BeforeAfterSection';
import {FinalInvitationSection} from './components/FinalInvitationSection';
import {Footer} from './components/Footer';
import {HeroSection} from './components/HeroSection';
import {HowWeStartSection} from './components/HowWeStartSection';
import {MobileStickyBar} from './components/MobileStickyBar';
import {ProblemSection} from './components/ProblemSection';
import {QuestionsSection} from './components/QuestionsSection';
import {TopBar} from './components/TopBar';
import {WhatIDoSection} from './components/WhatIDoSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FBF7F0] text-[#1A1816] overflow-x-clip">
        <TopBar />

        <main>
          <HeroSection />
          <ProblemSection />
          <WhatIDoSection />
          <BeforeAfterSection />
          <HowWeStartSection />
          <AboutSection />
          <QuestionsSection />
          <FinalInvitationSection />
        </main>

        <Footer />
        <MobileStickyBar />
      </div>
    </MotionConfig>
  );
}
