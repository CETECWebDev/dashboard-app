import dynamic from 'next/dynamic';

import { useTheme } from 'next-themes';

const LineChart = dynamic(() => import('@/components/module/LineChart'), { ssr: false });


export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme();
  return (
    <>
    <LineChart />
     <button onClick={() => setTheme('light')}>روشن</button>
     <button onClick={() => setTheme('dark')}>تاریک</button>

    </>
  )
}
