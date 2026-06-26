"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

export function About() {
  const scrollY = useParallax()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section
      id="sobre"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-slate-200 relative overflow-hidden"
    >
      {/* Background with city/industrial image */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/frente-matriz.webp" alt="" fill className="object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/95 via-slate-100/80 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="slide-right" className="flex items-center gap-3 mb-8">
          <ArrowRight className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Sobre Nós</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text and Video */}
          <div className="space-y-6">
            <AnimatedSection animation="slide-left" delay={100}>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                O Grupo Eletrovatti, foi fundado em 1995, visando prestação de serviços em motores elétricos, máquinas
                de solda, transformadores. Buscando sempre tecnologia e qualidade em nossos serviços, crescendo junto
                com nossos clientes, acompanhando a evolução do mercado. Contamos com uma equipe de colaboradores,
                altamente treinados, atualizados e preparados.
              </p>
            </AnimatedSection>

            {/* Video Player */}
            <AnimatedSection animation="scale" delay={200}>
              <div
                className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-slate-900 group"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(isPlaying ? false : true)}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/frente-matriz.webp"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source
                    src="https://video.wixstatic.com/video/57988a_9bc45e6f43c6494ca60716650200ed02/1080p/mp4/file.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-all duration-300 hover:bg-black/40"
                    onClick={togglePlay}
                  >
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                )}

                {/* Video Controls */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        title="Play/Pause"
                        onClick={togglePlay}
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        )}
                      </button>
                      <button
                        title="Mutar"
                        onClick={toggleMute}
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>
                    <button
                      title="Tela cheia"
                      onClick={toggleFullscreen}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Button */}
            <AnimatedSection animation="slide-up" delay={300}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Conheça Mais...
              </Button>
            </AnimatedSection>
          </div>

          {/* Right Column - 30 Anos Badge */}
          <AnimatedSection animation="slide-right" delay={200} className="relative flex justify-center lg:justify-end">
            <div className="relative" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
              {/* 30 Anos Badge Image */}
              <img
                src="/images/30anosshape.avif"
                alt="30 Anos no Mercado Atendendo Todo Brasil - Grupo Eletrovatti Motores"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
