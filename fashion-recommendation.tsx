import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FashionRecommendation = () => {
  const [skinTone, setSkinTone] = useState('');
  const [bodyType, setBodyType] = useState('');

  const skinToneRecommendations = {
    kuning: {
      colors: ['Navy', 'Merah', 'Putih', 'Coklat', 'Hijau'],
      description: 'Tone kulit kuning langsat cocok dengan warna-warna hangat dan netral.',
      examples: [
        { url: '/api/placeholder/200/300', alt: 'Dress Navy', description: 'Dress Navy Elegant' },
        { url: '/api/placeholder/200/300', alt: 'Blouse Merah', description: 'Blouse Merah Casual' },
      ]
    },
    sawo: {
      colors: ['Biru', 'Putih', 'Krem', 'Coklat Muda', 'Hijau Mint'],
      description: 'Tone kulit sawo matang cocok dengan warna-warna yang lembut dan sejuk.',
      examples: [
        { url: '/api/placeholder/200/300', alt: 'Blouse Biru', description: 'Blouse Biru Pastel' },
        { url: '/api/placeholder/200/300', alt: 'Dress Putih', description: 'Dress Putih Simple' },
      ]
    },
    gelap: {
      colors: ['Putih', 'Merah', 'Kuning', 'Orange', 'Pink'],
      description: 'Tone kulit gelap cocok dengan warna-warna cerah dan kontras.',
      examples: [
        { url: '/api/placeholder/200/300', alt: 'Dress Merah', description: 'Dress Merah Elegant' },
        { url: '/api/placeholder/200/300', alt: 'Top Kuning', description: 'Top Kuning Casual' },
      ]
    }
  };

  const bodyTypeRecommendations = {
    rectangular: {
      styles: [
        'Atasan dengan detail di bagian pinggang',
        'Dress dengan ikat pinggang',
        'Rok A-line',
        'Celana high-waist'
      ],
      tips: 'Fokus pada menciptakan ilusi kurva dan mendefinisikan pinggang.',
      examples: [
        { url: '/api/placeholder/200/300', alt: 'Dress Pinggang', description: 'Dress dengan Belt' },
        { url: '/api/placeholder/200/300', alt: 'Rok A-line', description: 'Rok A-line Classic' },
      ]
    },
    pear: {
      styles: [
        'Atasan dengan pola atau detail menarik',
        'Dress A-line',
        'Rok mengembang',
        'Celana bootcut'
      ],
      tips: 'Seimbangkan proporsi tubuh dengan menekankan bagian atas.',
      examples: [
        { url: '/api/placeholder/200/300', alt: 'Dress A-line', description: 'Dress A-line Flowy' },
        { url: '/api/placeholder/200/300', alt: 'Celana Bootcut', description: 'Celana Bootcut Modern' },
      ]
    },
    hourglass: {
      styles: [
        'Pakaian yang pas di pinggang',
        'Wrap dress',
        'Rok pensil',
        'Celana yang pas'
      ],
      tips: 'Tampilkan lekuk alami tubuh dengan pakaian yang pas.',
      examples: [
        { url: '/api/placeholder/200/300', alt: 'Wrap Dress', description: 'Wrap Dress Elegant' },
        { url: '/api/placeholder/200/300', alt: 'Rok Pensil', description: 'Rok Pensil Office Look' },
      ]
    },
    apple: {
      styles: [
        'Atasan longgar dengan detail V-neck',
        'Dress empire',
        'Rok lurus',
        'Celana straight-cut'
      ],
      tips: 'Pilih potongan yang mengalir dan tidak terlalu ketat di bagian tengah.',
      examples: [
        { url: '/api/placeholder/200/300', alt: 'Dress Empire', description: 'Dress Empire Cut' },
        { url: '/api/placeholder/200/300', alt: 'V-neck Top', description: 'V-neck Flowy Top' },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-6xl mx-auto p-8">
        <Card className="mb-8 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader className="text-center bg-pink-100 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-pink-800">Fashion Style Guide</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Skin Tone Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Pilih Tone Kulit:</h3>
                <div className="flex flex-wrap gap-4">
                  {Object.keys(skinToneRecommendations).map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSkinTone(tone)}
                      className={`px-6 py-3 rounded-full transition-all ${
                        skinTone === tone
                          ? 'bg-purple-500 text-white shadow-md transform scale-105'
                          : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                      }`}
                    >
                      {tone.charAt(0).toUpperCase() + tone.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Body Type Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Pilih Bentuk Tubuh:</h3>
                <div className="flex flex-wrap gap-4">
                  {Object.keys(bodyTypeRecommendations).map((type) => (
                    <button
                      key={type}
                      onClick={() => setBodyType(type)}
                      className={`px-6 py-3 rounded-full transition-all ${
                        bodyType === type
                          ? 'bg-purple-500 text-white shadow-md transform scale-105'
                          : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              {skinTone && bodyType && (
                <div className="mt-8 space-y-8">
                  {/* Color Recommendations */}
                  <Card className="bg-purple-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-2xl text-purple-800">Rekomendasi Warna</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-purple-700">{skinToneRecommendations[skinTone].description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skinToneRecommendations[skinTone].colors.map((color) => (
                          <span
                            key={color}
                            className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full shadow-sm"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skinToneRecommendations[skinTone].examples.map((example, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                              src={example.url}
                              alt={example.alt}
                              className="w-full h-auto rounded-lg mb-2"
                            />
                            <p className="text-center text-purple-700">{example.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Style Recommendations */}
                  <Card className="bg-pink-50 border-pink-200">
                    <CardHeader>
                      <CardTitle className="text-2xl text-pink-800">Rekomendasi Gaya Pakaian</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-pink-700">{bodyTypeRecommendations[bodyType].tips}</p>
                      <ul className="list-disc pl-6 space-y-2 mb-6 text-pink-700">
                        {bodyTypeRecommendations[bodyType].styles.map((style) => (
                          <li key={style}>{style}</li>
                        ))}
                      </ul>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bodyTypeRecommendations[bodyType].examples.map((example, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                              src={example.url}
                              alt={example.alt}
                              className="w-full h-auto rounded-lg mb-2"
                            />
                            <p className="text-center text-pink-700">{example.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FashionRecommendation;
