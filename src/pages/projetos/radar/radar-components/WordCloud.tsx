import React from 'react'
import { Radar, ExternalLink } from 'lucide-react'
import { PreviewCodeTabs } from '@/components/PreviewCodeTabs'

// Word Cloud Component
interface WordCloudWord {
  text: string
  size: number
  gradient: string
  rotate?: number
}

function WordCloudComponent() {
  const words: WordCloudWord[] = [
    { text: 'Inteligência Artificial', size: 42, gradient: 'linear-gradient(180deg, #d23c3c 0%, #7d5858 100%)' },
    { text: 'E-learning', size: 38, gradient: 'linear-gradient(180deg, #fff 0%, #00b8db 100%)' },
    { text: 'LMS', size: 36, gradient: 'linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)' },
    { text: 'Gamificação', size: 32, gradient: 'linear-gradient(166deg, #43e97b 0%, #38f9d7 100%)' },
    { text: 'Flashcards', size: 30, gradient: 'linear-gradient(164deg, #fa709a 0%, #fee140 100%)' },
    { text: 'Cursos Online', size: 28, gradient: 'linear-gradient(168deg, #30cfd0 0%, #330867 100%)' },
    { text: 'Videoaulas', size: 26, gradient: 'linear-gradient(164deg, #a8edea 0%, #fed6e3 100%)' },
    { text: 'AR/VR', size: 24, gradient: 'linear-gradient(154deg, #ff9a56 0%, #ff6a88 100%)' },
    { text: 'STEM', size: 24, gradient: 'linear-gradient(152deg, #ffecd2 0%, #fcb69f 100%)' },
    { text: 'MOOC', size: 22, gradient: 'linear-gradient(154deg, #ff6e7f 0%, #bfe9ff 100%)' },
    { text: 'Coding', size: 22, gradient: 'linear-gradient(157deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { text: 'Tutoria Online', size: 20, gradient: 'linear-gradient(167deg, #f77062 0%, #fe5196 100%)' },
    { text: 'Analytics', size: 18, gradient: 'linear-gradient(162deg, #fbc2eb 0%, #a6c1ee 100%)' },
    { text: 'Matemática', size: 18, gradient: 'linear-gradient(165deg, #fdcbf1 0%, #e6dee9 100%)' },
    { text: 'STEAM', size: 16, gradient: 'linear-gradient(157deg, #667eea 0%, #764ba2 100%)' },
    { text: 'Idiomas', size: 20, gradient: 'linear-gradient(158deg, #ff758c 0%, #ff7eb3 100%)' },
    { text: 'K-12', size: 14, gradient: 'linear-gradient(146deg, #f093fb 0%, #f5576c 100%)' },
    { text: 'Mobile Learning', size: 18, gradient: 'linear-gradient(169deg, #868f96 0%, #596164 100%)' },
  ]

  return (
    <div className="relative w-full h-64 bg-[#030712] rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-4">
        {words.map((word, index) => (
          <span
            key={index}
            className="font-bold opacity-75 whitespace-nowrap"
            style={{
              fontSize: `${word.size}px`,
              background: word.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: word.rotate ? `rotate(${word.rotate}deg)` : undefined,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  )
}

const wordCloudCode = `interface WordCloudWord {
  text: string
  size: number
  gradient: string
  rotate?: number
}

function WordCloud({ words }: { words: WordCloudWord[] }) {
  return (
    <div className="relative w-full h-64 bg-[#030712] rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-4">
        {words.map((word, index) => (
          <span
            key={index}
            className="font-bold opacity-75 whitespace-nowrap"
            style={{
              fontSize: \`\${word.size}px\`,
              background: word.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: word.rotate ? \`rotate(\${word.rotate}deg)\` : undefined,
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  )
}

// Uso:
const words = [
  { text: 'Inteligência Artificial', size: 42, gradient: 'linear-gradient(180deg, #d23c3c 0%, #7d5858 100%)' },
  { text: 'E-learning', size: 38, gradient: 'linear-gradient(180deg, #fff 0%, #00b8db 100%)' },
  { text: 'LMS', size: 36, gradient: 'linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)' },
  // ...
]

<WordCloud words={words} />`

// ============================================
// MAIN PAGE
// ============================================

export function RadarWordCloud() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <Radar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h1
              className="text-4xl font-bold text-neutral-900 dark:text-white"
              style={{ fontFamily: 'var(--font-family-2)' }}
            >
              Word Cloud
            </h1>
            <p className="text-sm text-neutral-500">Radar / Componentes</p>
          </div>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Visualização de nuvem de palavras utilizada no projeto Radar para mostrar termos relevantes.
        </p>
      </div>

      {/* WordCloud Section */}
      <section className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Nuvem de Palavras
            </h2>
            <p className="text-sm text-neutral-500">
              Visualização de termos e categorias com tamanhos variados e gradientes coloridos. Palavras maiores indicam maior relevância.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=44-701"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <PreviewCodeTabs
          preview={<WordCloudComponent />}
          code={wordCloudCode}
          previewClassName="bg-[#0E0E12]"
        />
      </section>

      {/* Specs */}
      <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Características</h3>
        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <p>Palavras com tamanhos variados (14px a 42px) indicando relevância</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <p>Gradientes coloridos únicos para cada termo</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <p>Background escuro (#030712) para contraste</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <p>Opacidade de 75% para efeito visual mais suave</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
          Fonte dos componentes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Word Cloud recriado em React baseado no design original do Figma.
        </p>
        <a
          href="https://www.figma.com/design/BQSWNXCHq9B7NFbtGmFqj0/-Radar--Prot%C3%B3tipo?node-id=44-701"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          Ver no Figma
        </a>
      </div>
    </div>
  )
}
