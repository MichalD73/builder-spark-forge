import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Index() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-none tracking-wide mb-5">
              <span className="text-primary">Smart</span>
              <span className="text-foreground"> business buying</span>
            </h1>

            <p className="text-2xl lg:text-4xl font-normal text-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              Streamline your purchasing with innovative tools and unmatched
              selection.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-8 py-6 rounded-full min-w-64"
                asChild
              >
                <a
                  href="https://amazon.com/business/register/org/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Create a free account Opens in a new tab"
                >
                  Create a free account
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-foreground font-normal text-xl px-8 py-6 rounded-full min-w-64 hover:bg-secondary/10"
                asChild
              >
                <a
                  href="https://business.amazon.com/en/contact-us"
                  aria-label="Contact sales"
                >
                  Contact sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Video Player */}
              <div className="lg:w-1/2 relative">
                <div className="relative bg-gray-900 rounded-3xl overflow-hidden aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    poster="https://static-assets.business.amazon.com/assets/global/polaris/hero/homepage_what_is_AB_hero.png"
                    controls={isVideoPlaying}
                    preload="metadata"
                  >
                    <source
                      src="https://static-assets.business.amazon.com/assets/global/polaris/videos/Revised-Value_Prop_Video_8.24.mp4"
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                  </video>

                  {!isVideoPlaying && (
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent cursor-pointer flex items-end"
                      onClick={handleVideoPlay}
                    >
                      <div className="p-10 w-full">
                        <div className="flex items-center gap-5 mb-4">
                          <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-gray-900 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <h3 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
                            What is Amazon Business?
                          </h3>
                          <span className="text-white text-xl ml-auto">
                            02:47
                          </span>
                        </div>

                        <div className="bg-gray-900 rounded-b-3xl -mx-10 -mb-10 p-10 pt-0 flex items-center justify-between">
                          <p className="text-white max-w-3xl leading-relaxed">
                            Amazon Business helps millions of customers
                            worldwide reshape their business buying with cost
                            and time savings, greater productivity, and
                            insightful purchasing analytics.
                          </p>
                          <Button
                            variant="outline"
                            className="border-gray-300 text-white hover:bg-white/10 ml-6 rounded-full px-6 py-3 text-base"
                            asChild
                          >
                            <a href="https://business.amazon.com/en/blog/what-is-amazon-business">
                              Read more
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-white border border-secondary rounded-xl p-8 flex flex-col justify-between min-h-64">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                  Delivering for you
                </h3>
                <p className="text-foreground mb-8 leading-relaxed">
                  Set customized delivery preferences to get the supplies you
                  need, when you need them.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-secondary text-foreground hover:bg-secondary/10 rounded-full px-6 py-3 text-base w-fit"
                asChild
              >
                <a
                  href="https://business.amazon.com/en/shipping-delivery"
                  className="inline-flex items-center gap-2"
                >
                  Learn more
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Button>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white border border-secondary rounded-xl p-8 flex flex-col justify-between min-h-64">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                  Save up to $100
                </h3>
                <p className="text-foreground mb-8 leading-relaxed">
                  Create your free Amazon Business account and get 40% off up to
                  $100 on your first purchase. T&Cs apply.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-secondary text-foreground hover:bg-secondary/10 rounded-full px-6 py-3 text-base w-fit"
                asChild
              >
                <a
                  href="https://www.amazon.com/ab/incentives/reg/nt?campaignId=6f09a217-07bb-4350-b6e6-d7745fb53315&ABevent=PD25&ref_=b2b_mcs_events_acq_pd25"
                  className="inline-flex items-center gap-2"
                >
                  Save now
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Button>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white border border-secondary rounded-xl p-8 flex flex-col justify-between min-h-64">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                  Enhance purchasing
                </h3>
                <p className="text-foreground mb-8 leading-relaxed">
                  Learn about the innovative tools and features that make
                  purchasing a seamless experience.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-secondary text-foreground hover:bg-secondary/10 rounded-full px-6 py-3 text-base w-fit"
                asChild
              >
                <a
                  href="https://business.amazon.com/en/solutions"
                  className="inline-flex items-center gap-2"
                >
                  Learn more
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
