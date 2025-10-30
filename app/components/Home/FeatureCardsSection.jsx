import {
  FestivalFeatures,
  Garagefeatures
} from '@/app/constants/Home/HomePageFeatures';
import ExplanationCard from './ExplanationCard';
import FamilyCard from './FamilyCard';

const FeatureCardsSection = () => (
  <>
    <ExplanationCard
      gifSrc="/garagegif.gif"
      buttonText="برو به گاراژ من"
      description="   تو گاراژت خودروهای مورد علاقه‌ات رو جمع کن و کلکسیون شخصی‌تو بساز و
            تجربه‌های واقعی‌ات رو با دیگران به اشتراک بگذار."
      title="گاراژتو با ماشین‌های مورد علاقه‌ات پر کن"
      features={Garagefeatures}
      backgroundStyles={{ backgroundColor: '#546189' }}
      bgImageSrc="/blueLambo.png"
    />
    <ExplanationCard
      title="در فستیوال ها، ماشینتو به نمایش بذار"
      description="تو فستیوال ها از ماشینت عکس و فیلم بگیر و با بقیه به اشتراک بذار، به بهترین فیلم و عکس های ارسالی دستاورد های نفیس تعلق میگیره."
      backgroundStyles={{ backgroundColor: '#814E88' }}
      buttonStyles={{
        backgroundColor: '#FF1D8E !important',
        border: '1px solid #FC00D2 !important'
      }}
      buttonText="مشاهده فستیوال"
      bgImageSrc="/redLambo.png"
      gifSrc="festgif.gif"
      features={FestivalFeatures}
    />
    <FamilyCard />
  </>
);
export default FeatureCardsSection;
