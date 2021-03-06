import Glide, {
  Controls,
  Keyboard,
  Images,
  Swipe,
} from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  perTouch: 3,
  gap: 0,
}).mount({ Controls, Keyboard, Images, Swipe });
