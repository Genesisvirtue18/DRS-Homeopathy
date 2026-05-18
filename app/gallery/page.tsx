"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Sparkles,
  Play,
  X,
  ImageIcon,
  Video,
  Loader2,
} from "lucide-react";

import {
  FaYoutube,
} from "react-icons/fa";

import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";



interface Video {
  guid: string;
  title: string;
  thumbnail: string;
  pubDate: string;
}

const galleryImages = [
  "/images/g1.jpg",
  "/images/g2.jpg",
  "/images/g3.jpg",
  "/images/g4.jpg",
  "/images/g5.jpg",
  "/images/g6.jpg",
  "/images/g7.jpg",
  "/images/g8.jpg",
  "/images/g9.jpg",
  "/images/g10.jpg",
  "/images/g11.jpg",
  "/images/g12.jpg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = "UCIzJsjm1gTFEHd8zeCXIC8Q";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
        );
        const data = await response.json();
        
        const videoData = data.items.map((item: any) => ({
          guid: item.guid,
          title: item.title,
          pubDate: item.pubDate,
          thumbnail: `https://img.youtube.com/vi/${item.guid.split(":").pop()}/mqdefault.jpg`,
        }));
        
        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch videos", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 500);
  };

  const getVideoId = (guid: string) => guid.split(":").pop();
  const displayedVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <main className="bg-white overflow-hidden">
      
      <Navbar />

      {/* HERO SECTION - Modern & Compact (Matching Services Page) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001E3C] via-[#0B2C66] to-[#001E3C] pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#6EDC8C]" />
            <span className="text-xs font-semibold text-white">Our Gallery</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Moments Of <span className="text-[#6EDC8C]">Healing</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm text-gray-300">
            Explore our clinic environment, patient experiences and healthcare journey through our gallery.
          </p>
        </div>

        {/* Wave Bottom */}
          <div className="absolute bottom-[-1px] left-0 right-0 overflow-hidden leading-none">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    className="block h-[82px] w-full"
  >
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* IMAGE GALLERY SECTION */}
<section className="relative z-10 -mt-[2px] bg-white py-12 md:py-16">     
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-2">
              <ImageIcon className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">Gallery Images</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2A5A]">Our <span className="text-[#6EDC8C]">Clinic Gallery</span></h2>
            <div className="h-0.5 w-10 bg-[#6EDC8C] mx-auto mt-1.5" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt="Gallery"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ImageIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY SECTION */}
      <section className="bg-[#F0F4F9] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-2">
              <Video className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">Video Gallery</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2A5A]">Watch Our <span className="text-[#6EDC8C]">Videos</span></h2>
            <div className="h-0.5 w-10 bg-[#6EDC8C] mx-auto mt-1.5" />
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[#6EDC8C]" />
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedVideos.map((video, index) => {
                  const videoId = getVideoId(video.guid);
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedVideo(video)}
                      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-red-600/90 rounded-full p-3 shadow-lg transition duration-300 group-hover:scale-110">
                            <Play className="h-6 w-6 text-white ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 bg-red-600 rounded-full p-1.5 shadow-lg">
                          <FaYoutube className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-[#0E2A5A] text-sm line-clamp-1">{video.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(video.pubDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Video Counter */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Showing {displayedVideos.length} of {videos.length} videos
                </p>
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="mt-6 text-center">
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#6EDC8C] bg-transparent px-6 py-2 text-sm font-semibold text-[#6EDC8C] transition-all duration-300 hover:bg-[#6EDC8C] hover:text-white disabled:opacity-50"
                  >
                    {loadingMore ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        Load More Videos
                        <Play className="h-3 w-3" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Subscribe Button */}
              {videos.length > 0 && (
                <div className="text-center mt-8">
                  <a
                    href="https://www.youtube.com/@Drrekhasaroha"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-red-700 hover:scale-105"
                  >
                    <FaYoutube className="h-4 w-4" />
                    Subscribe to Our Channel
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg transition hover:scale-110"
          >
            <X className="h-5 w-5 text-black" />
          </button>
          <div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg transition hover:scale-110"
          >
            <X className="h-5 w-5 text-black" />
          </button>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative pb-[56.25%]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${getVideoId(selectedVideo.guid)}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              />
            </div>
            <h3 className="text-white font-semibold mt-3 text-center">{selectedVideo.title}</h3>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}