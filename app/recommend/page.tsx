'use client';
import {useState} from 'react';
import FormattedRecommandations from '@/app/recommend/FormattedRecommandations';
import {withPageAuthRequired} from "@auth0/nextjs-auth0/client";

function Recommend() {
  const [prompt, setPrompt] = useState('');
  const [country, setCountry] = useState('France');
  const [recommendations, setRecommendations] = useState<string>("");

  const formatMessage = (message: string): string => {
    return message.split(/\n|\t/).join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, country }),
    });

    const data = await response.json();
    setRecommendations(formatMessage(data.message) || "");
  };

  return (
      <div>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/auth/login?returnTo=/home">Login</a>
        <a href="/api/auth/logout">Logout</a>
        <h1>Recommandations de séries</h1>
        <form onSubmit={handleSubmit}>
          <input
              type='text'
              placeholder='Que veux-tu regarder ?'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
          />
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value='France'>France</option>
            <option value='USA'>USA</option>
            <option value='Canada'>Canada</option>
          </select>
          <button type='submit'>Envoyer</button>
        </form>

        <FormattedRecommandations recommendations={recommendations}/>
      </div>
  );
}

export default withPageAuthRequired(Recommend);