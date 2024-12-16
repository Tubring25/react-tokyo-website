import { JoinDiscordServer } from '../components/joinDiscordServer';

const meta = {
  title: 'React Tokyo',
};

const descriptions = [
  '東京を中心に、オンラインとオフラインの両方で活動するReactコミュニティです。',
  'オンラインでは、Discordを通じた情報交換や交流の場を提供し、オフラインではReactに関するイベントを開催します。',
  '初心者から経験者まで、職種や技術力を問わず、誰でも気軽に参加できるのが特徴です。',
  'Reactを学びたい人、新しいつながりを作りたい人、初めてコミュニティに参加する人も大歓迎です！',
  '一緒にReactを楽しみましょう！',
];

export default async function HomePage() {
  return (
    <div>
      <title>{meta.title}</title>
      <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-flow-row gap-y-2 gap-x-8">
        <div className="lg:col-span-2 flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold tracking-tight">分からないを分かち合う、広げようReactの世界。</h1>
        </div>
        <div className="lg:row-span-3 flex items-center justify-center">
          <div className="w-40 lg:w-80 rounded-full bg-[#F45554]">
            <img src="/images/react-tokyo-logo.png" alt="react tokyo logo" />
          </div>
        </div>
        <div className="lg:row-span-2 lg:col-span-2 flex flex-col items-start justify-center gap-8">
          <div>
            {descriptions.map((description) => (
              <p>{description}</p>
            ))}
          </div>
          <div>
            <JoinDiscordServer />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
