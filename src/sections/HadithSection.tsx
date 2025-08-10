import { Quote } from "lucide-react";
import heroBg from "@/assets/hero-floral-bg.jpg";

const HadithSection = () => {
  return (
    <section
      id="hadith"
      aria-labelledby="hadith-title"
      className="relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-background/80">
        <div className="container mx-auto py-16 md:py-24 font-display" dir="rtl">
          <div className="text-center animate-fade-in">
            <h2
              id="hadith-title"
              className="text-4xl md:text-5xl text-accent-foreground tracking-wide"
            >
              نکاح کے بارے میں حدیث
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto italic">
              "اور اس نے تمہارے درمیان محبت اور رحمت ڈال دی۔" — سورۃ الروم ۳۰:۲۱
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-accent-foreground/70">
              <span className="h-px w-16 bg-accent/50" />
              <span className="w-2 h-2 rounded-full bg-accent/70" />
              <span className="h-px w-16 bg-accent/50" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Hadith 1 */}
            <article className="animate-fade-in bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-3">
                <Quote className="text-accent-foreground/70 shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed text-foreground font-medium leading-loose">
                    "نکاح میری سنت ہے، اور جو اس سے اعراض کرے وہ مجھ میں سے نہیں۔"
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-loose">
                    ہمارے پیارے نبی ﷺ نے نکاح کی برکت اور ذمہ داری کی ترغیب دی۔
                  </p>
                </div>
              </div>
            </article>

            {/* Hadith 2 */}
            <article className="animate-fade-in bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-3">
                <Quote className="text-accent-foreground/70 shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed text-foreground font-medium leading-loose">
                    "اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تم ہی میں سے بیویاں پیدا کیں تاکہ تم ان سے سکون پاؤ، اور تمہارے درمیان محبت اور رحمت پیدا کی۔"
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    سورۃ الروم ۳۰:۲۱
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HadithSection;
