import Image from "next/image";
import Link from "next/link";
import GordonNavBar from "@/components/GordonNavBar/GordonNavBar";
import PhotoCollection from "@/components/PhotoCollection/PhotoCollection";
import { Footer } from "@/components/Footer/Footer";
import { interestPhotos } from "@/constants/InterestData";
import { assetPath } from "@/utils/assetPath";

const interests = [
  { number: "01", title: "Visual stories", copy: "Street photography, quiet observations, and the small details that make a place feel lived in." },
  { number: "02", title: "Travel", copy: "Moving slowly through new cities—learning their rhythms, food, architecture, and everyday rituals." },
  { number: "03", title: "Teaching", copy: "Making technical subjects click through experiments, patient explanation, and hands-on building." },
  { number: "04", title: "Science & culture", copy: "Physics, humanities, and the ideas that connect technical progress with human meaning." },
];

export default function InterestsPage() {
  return (
    <div className="site-frame interests-page">
      <GordonNavBar />
      <main>
        <section className="interests-hero">
          <div className="interests-hero__image"><Image src={assetPath("/images/profolio.JPG")} alt="Gordon Wong under city lights" fill priority sizes="(max-width: 800px) 100vw, 52vw" className="object-cover" /></div>
          <div className="interests-hero__shade" />
          <div className="interests-hero__content">
            <p className="eyebrow text-accent">Away from the keyboard / 01—04</p>
            <h1>Curious<br />by nature<span>.</span></h1>
            <p className="interests-hero__copy">The images, places, and ideas that keep the technical work grounded in a wider world.</p>
            <Link href="#interests" className="text-link">See what keeps me curious <span>↘</span></Link>
          </div>
        </section>

        <section className="interests-list-section" id="interests">
          <div className="section-shell">
            <div className="interests-list-heading"><p className="eyebrow">Outside interests</p><h2>What I notice<br /><em>shapes what I make.</em></h2></div>
            <div className="interests-list">
              {interests.map((interest) => <article className="interest-row" key={interest.number}><span>{interest.number}</span><h3>{interest.title}</h3><p>{interest.copy}</p></article>)}
            </div>
            <div className="journal-callout"><p className="eyebrow">Field notes</p><p>Photographs and stories from the road, collected as I go.</p><Link href="https://wong31415.wixsite.com/travel-blog/" target="_blank" className="text-link">Visit travel journal <span>↗</span></Link></div>
          </div>
        </section>

        <section className="photo-journal-section" aria-labelledby="photo-journal-title">
          <div className="section-shell">
            <div className="photo-journal-heading">
              <p className="eyebrow text-accent">Through my lens / 01—05</p>
              <h2 id="photo-journal-title">Places that made me <em>look twice.</em></h2>
              <p>Four travel frames and one page of equations—the visual notes I keep returning to.</p>
            </div>
            <PhotoCollection photos={interestPhotos} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
