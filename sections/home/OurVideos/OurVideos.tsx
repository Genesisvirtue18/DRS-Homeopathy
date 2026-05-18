"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Sparkles, Eye, Loader2, X, Maximize2, Minimize2 } from "lucide-react";
import {
  FaYoutube,
} from "react-icons/fa";

interface Video {
  guid: string;
  title: string;
  pubDate: string;
  thumbnail: string;
}

export default function OurVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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
        
        setAllVideos(videoData);
        setVideos(videoData.slice(0, 6));
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
      const newCount = visibleCount + 6;
      setVisibleCount(newCount);
      setVideos(allVideos.slice(0, newCount));
      setLoadingMore(false);
    }, 500);
  };

  const hasMore = videos.length < allVideos.length;

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    setPlayerReady(false);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsFullscreen(false);
    setPlayerReady(false);
    document.body.style.overflow = "auto";
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const getVideoId = (guid: string) => guid.split(":").pop();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F0F4F9] py-5 md:py-5">
      
      {/* Background Blurs */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#123B7A]/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0B2C66]/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F5DA8]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1">
            <FaYoutube className="h-3.5 w-3.5 text-red-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#001E3C]">
              YouTube Videos
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#001E3C] md:text-3xl lg:text-4xl">
            Latest{" "}
            <span className="text-[#123B7A]">
              Videos
            </span>
          </h2>

          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#001E3C] to-[#123B7A]" />

          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#0B2C66]/70">
            Watch expert advice, patient success stories and treatment awareness videos from Dr Rekha Saroha.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-12 w-12 animate-spin text-[#123B7A]" />
              <p className="text-sm text-[#0B2C66]">Loading videos...</p>
            </div>
          </div>
        )}

        {/* VIDEO GRID */}
        {!loading && (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, index) => (
                <div
                  key={index}
                  onClick={() => openVideo(video)}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/40" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-600">
                        <Play className="h-6 w-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                      <Eye className="inline h-3 w-3 mr-1" />
                      Click to Play
                    </div>
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-red-600 px-2 py-1 shadow-lg">
                      <FaYoutube className="h-3 w-3 text-white" />
                      <span className="text-xs font-medium text-white">YouTube</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-sm font-bold leading-tight text-[#001E3C] transition group-hover:text-[#123B7A]">
                      {video.title}
                    </h3>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {new Date(video.pubDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
                        Play Video
                        <Play className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Showing {videos.length} of {allVideos.length} videos
              </p>
            </div>

            {hasMore && (
              <div className="mt-6 text-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-[#123B7A] bg-transparent px-8 py-2.5 text-sm font-semibold text-[#123B7A] transition-all duration-300 hover:bg-[#123B7A] hover:text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loadingMore ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      Load More Videos
                      <Sparkles className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                    </>
                  )}
                </button>
              </div>
            )}

            {allVideos.length > 0 && (
              <div className="mt-10 text-center">
                <a
                  href="https://www.youtube.com/@Drrekhasaroha"
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-700"
                >
                  <FaYoutube className="h-4 w-4" />
                  Subscribe to Our Channel
                  <Sparkles className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </a>
              </div>
            )}
          </>
        )}
      </div>

      {/* Video Modal - Optimized */}
      {selectedVideo && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 transition-all duration-300 ${
            isFullscreen ? "p-0" : "p-4"
          }`}
          onClick={closeVideo}
        >
          <div 
            ref={modalRef}
            className={`relative bg-black transition-all duration-300 ${
              isFullscreen ? "w-full h-full" : "w-full max-w-5xl rounded-2xl overflow-hidden"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading Indicator */}
            {!playerReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-10 w-10 animate-spin text-red-600" />
                  <p className="text-sm text-white/70">Loading video...</p>
                </div>
              </div>
            )}

            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
              <h3 className="text-white font-semibold text-sm md:text-base line-clamp-1 pr-8 max-w-[70%]">
                {selectedVideo.title}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="text-white/80 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
                >
                  {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </button>
                <button
                  onClick={closeVideo}
                  className="text-white/80 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Video Player - Optimized with lazy loading */}
            <div className={`relative ${isFullscreen ? "h-screen" : "aspect-video"}`}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${getVideoId(selectedVideo.guid)}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&enablejsapi=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                onLoad={() => setPlayerReady(true)}
              />
            </div>

            {/* Modal Footer */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaYoutube className="h-5 w-5 text-red-600" />
                  <span className="text-xs text-white/80">
                    {new Date(selectedVideo.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${getVideoId(selectedVideo.guid)}`}
                  target="_blank"
                  className="text-xs text-white/60 hover:text-white transition"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}