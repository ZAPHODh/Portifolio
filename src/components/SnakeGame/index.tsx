import { useEffect, useRef, useState } from 'react';
import { GameOver } from '../GameOver';
import * as Styled from './styles';
type Position = {
  x: number;
  y: number;
};
export const SnakeGame = () => {
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const blockSize = 10;
    if (!ctx) return;
    const width = canvas.width / blockSize;
    const height = canvas.height / blockSize;
    const generateFoodPosition = (): { x: number; y: number } => {
      let newFoodPosition: Position;
      do {
        newFoodPosition = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
        };
      } while (
        snake.some(
          (block) =>
            block.x === newFoodPosition.x && block.y === newFoodPosition.y,
        )
      );
      return newFoodPosition;
    };
    // eslint-disable-next-line prefer-const
    let interval: NodeJS.Timeout;

    const drawBlock = (
      ctx: CanvasRenderingContext2D,
      pos: { x: number; y: number },
      color: string,
    ) => {
      const { x, y } = pos;
      ctx.fillStyle = color;
      ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
    };

    const drawSnake = (ctx: CanvasRenderingContext2D) => {
      snake.forEach((block) => {
        drawBlock(ctx, block, 'white');
      });
    };

    const drawFood = (ctx: CanvasRenderingContext2D) => {
      drawBlock(ctx, food, '#8c8c8c');
    };

    const advanceSnake = () => {
      const head = { ...snake[0] };
      switch (direction) {
        case 'LEFT':
          head.x -= 1;
          break;
        case 'UP':
          head.y -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
      }
      if (head.x === food.x && head.y === food.y) {
        setScore(score + 10);
        setFood(generateFoodPosition);
      } else {
        snake.pop();
      }
      snake.unshift(head);
    };
    const checkCollision = () => {
      const head = snake[0];
      if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
        clearInterval(interval);
        setGameOver(true);
      }
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          clearInterval(interval);
          setGameOver(true);
        }
      }
    };

    const gameLoop = () => {
      if (!ctx) return;
      advanceSnake();
      checkCollision();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake(ctx);
      drawFood(ctx);
    };

    interval = setInterval(gameLoop, 100);

    return () => {
      clearInterval(interval);
    };
  }, [snake, food, direction, score]);

  useEffect(() => {
    // ...
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      setDirection((prevDirection) => {
        switch (e.key) {
          case 'ArrowLeft':
            if (prevDirection !== 'RIGHT') {
              return 'LEFT';
            }
            break;
          case 'ArrowUp':
            if (prevDirection !== 'DOWN') {
              return 'UP';
            }
            break;
          case 'ArrowRight':
            if (prevDirection !== 'LEFT') {
              return 'RIGHT';
            }
            break;
          case 'ArrowDown':
            if (prevDirection !== 'UP') {
              return 'DOWN';
            }
            break;
        }
        return prevDirection;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Styled.Wrapper>
      {gameOver ? (
        <GameOver score={score}></GameOver>
      ) : (
        <Styled.GameCanvas ref={canvasRef} />
      )}
    </Styled.Wrapper>
  );
};
