import Image from 'next/image';
import { images } from 'public/resourses';

export default function HeroIllustration() {
  return (
    <div>
      <Image src={images.hero} alt="Hero Image" width={450} height={450} />
    </div>
  );
}
