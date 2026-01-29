"use client";

import Link from "next/link";
import { useState } from "react";

interface Game {
  id: string;
  name: string;
  description: string;
  language: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  playerCount: string;
  status: "active" | "maintenance" | "beta";
}

export function GameChooser() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const games: Game[] = [
    {
      id: "tetris-clone",
      name: "Tetris.js",
      description:
        "Classic block puzzle game built with vanilla JavaScript and Canvas API",
      language: "JavaScript",
      difficulty: "Intermediate",
      tags: ["puzzle", "arcade", "canvas"],
      playerCount: "1P",
      status: "active",
    },
    {
      id: "snake-game",
      name: "Snake++",
      description:
        "Modern take on the classic Snake game with TypeScript and smooth animations",
      language: "TypeScript",
      difficulty: "Beginner",
      tags: ["arcade", "retro", "score-based"],
      playerCount: "1P",
      status: "active",
    },
    {
      id: "memory-matrix",
      name: "Memory Matrix",
      description:
        "Test your memory with this sequence-based pattern matching game",
      language: "React",
      difficulty: "Advanced",
      tags: ["memory", "patterns", "brain-training"],
      playerCount: "1P",
      status: "beta",
    },
    {
      id: "code-battle",
      name: "Code Battle Arena",
      description:
        "Multiplayer coding challenges with real-time syntax checking",
      language: "Full-Stack",
      difficulty: "Advanced",
      tags: ["multiplayer", "coding", "competitive"],
      playerCount: "2-8P",
      status: "maintenance",
    },
  ];

  const filteredGames =
    selectedFilter === "all"
      ? games
      : games.filter(
          (game) => game.difficulty.toLowerCase() === selectedFilter,
        );

  const getStatusColor = (status: Game["status"]) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-50 border-green-200";
      case "beta":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "maintenance":
        return "text-gray-600 bg-gray-50 border-gray-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getDifficultyColor = (difficulty: Game["difficulty"]) => {
    switch (difficulty) {
      case "Beginner":
        return "text-blue-700 bg-blue-100";
      case "Intermediate":
        return "text-yellow-700 bg-yellow-100";
      case "Advanced":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Game Library
          </h1>
          <p className="text-gray-700">
            Select a game to start playing or browse by difficulty level
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
          {["all", "beginner", "intermediate", "advanced"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedFilter === filter
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGames.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm hover:border-gray-300 transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {game.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(game.status)}`}
                    >
                      {game.status}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">
                    {game.playerCount}
                  </span>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {game.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {game.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500 font-mono">
                      {game.language}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}
                    >
                      {game.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-2">
              No games found for this difficulty level
            </div>
            <button
              onClick={() => setSelectedFilter("all")}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Show all games
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
