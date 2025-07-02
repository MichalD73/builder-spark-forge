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
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[156px] py-16">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[120px] font-black leading-[0.9] tracking-[0.02em] mb-5">
              <span className="text-primary">Smart</span>
              <span className="text-foreground"> business buying</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl xl:text-[44px] font-normal text-foreground mb-10 max-w-5xl mx-auto leading-[1.2] tracking-[0.01em]">
              Streamline your purchasing with innovative tools and unmatched
              selection.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-8 py-6 rounded-full min-w-72"
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
                className="border-secondary text-foreground font-normal text-xl px-8 py-6 rounded-full min-w-72 hover:bg-secondary/10"
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
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[156px]">
          <div className="relative">
            <div className="lg:flex lg:gap-6">
              {/* Video Player */}
              <div className="lg:w-1/2 relative mt-15">
                <div className="relative bg-gray-900 rounded-[40px] overflow-hidden aspect-video max-h-[643px]">
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
                      className="absolute inset-0 bg-gradient-to-t from-[#161D26]/100 via-[#161D26]/75 to-transparent cursor-pointer flex items-end"
                      onClick={handleVideoPlay}
                    >
                      <div className="p-10 w-full">
                        <div className="flex items-center gap-5 mb-4">
                          <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center p-[18px]">
                            <svg
                              className="w-6 h-6 text-[#161D26] ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <h3 className="text-white text-2xl lg:text-[44px] font-bold leading-[40px] tracking-[0.4px]">
                            What is Amazon Business?
                          </h3>
                          <span className="text-white text-xl leading-[28px] ml-auto">
                            02:47
                          </span>
                        </div>

                        <div className="bg-[#161D26] rounded-b-[40px] -mx-10 -mb-10 p-10 pt-0 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                          <p className="text-white flex-1 leading-relaxed">
                            Amazon Business helps millions of customers
                            worldwide reshape their business buying with cost
                            and time savings, greater productivity, and
                            insightful purchasing analytics.
                          </p>
                          <Button
                            variant="outline"
                            className="border-[#BBBBBF] text-white hover:bg-white/10 rounded-full px-6 py-3 text-base flex-shrink-0"
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
      <section className="bg-accent pb-16">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[156px]">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Feature Card 1 */}
            <div className="bg-white border border-secondary/30 rounded-[20px] p-8 flex-1 flex flex-col justify-between min-h-[300px] max-w-[774px] min-w-[480px]">
              <div className="max-w-[456px]">
                <h3 className="text-[32px] font-bold text-foreground mb-3 leading-[28px] tracking-[0.28px]">
                  Delivering for you
                </h3>
                <p className="text-foreground mb-10 leading-relaxed">
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
            <div className="bg-white border border-secondary/30 rounded-[20px] p-8 flex-1 flex flex-col justify-between min-h-[300px] max-w-[774px] min-w-[480px]">
              <div className="max-w-[456px]">
                <h3 className="text-[32px] font-bold text-foreground mb-3 leading-[28px] tracking-[0.28px]">
                  Save up to $100
                </h3>
                <p className="text-foreground mb-10 leading-relaxed">
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
            <div className="bg-white border border-secondary/30 rounded-[20px] p-8 flex-1 flex flex-col justify-between min-h-[300px] max-w-[774px] min-w-[480px]">
              <div className="max-w-[456px]">
                <h3 className="text-[32px] font-bold text-foreground mb-3 leading-[28px] tracking-[0.28px]">
                  Enhance purchasing
                </h3>
                <p className="text-foreground mb-10 leading-relaxed">
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
