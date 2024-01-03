import { Suspense } from 'react';
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import MealLoadingPage from './loading-out';

export const metadata = {
  title: 'All Meals',
  desription: 'Browse the delicious meals shared by our vibrant community',
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href={'/meals/share'}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
