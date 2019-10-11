import Vue from 'vue';
import VueRouter from 'vue-router';
import KeyboardDemo from '@/view/KeyboardDemo';
import OrderDefault from '@/view/OrderDefault';
import Groupable from '@/view/Groupable';
import Payment from '@/view/Payment';
import MenuDemo from '@/view/MenuDemo';
import Dialog from '@/view/DialogDemo';
import SliderDemo from '../view/SliderDemo';
import CardDemo from '../view/CardDemo';
import ButtonDemo from '../view/ButtonDemo';
import OverlayDemo from "../view/OverlayDemo";
import PulseDemo from '../view/PulseDemo';
import ToolTipDemo from '../view/ToolTipDemo';
import TransitionDemo from '../view/TransitionDemo';
import ChipDemo from '../view/ChipDemo';

const routes = [
  { path: '/keyboard-demo', name: 'KeyboardDemo', component: KeyboardDemo},
  { path: '/order-default', name: 'OrderDefault', component: OrderDefault},
  { path: '/groupable', name: 'Groupable', component: Groupable},
  { path: '/payment', name: 'Payment', component: Payment},
  { path: '/dialog', name: 'Dialog', component: Dialog},
  { path: '/slider', name: 'Slider', component: SliderDemo},
  { path: '/menu-demo', name: 'Menu', component: MenuDemo},
  { path: '/overlay-demo', name: 'Overlay', component: OverlayDemo},
  { path: '/card', name: 'Card', component: CardDemo},
  { path: '/button', name: 'Button', component: ButtonDemo},
  { path: '/pulse-demo', name: 'Pulse', component: PulseDemo},
  { path: '/tool-tip-demo', name: 'ToolTip', component: ToolTipDemo},
  { path: '/chip', name: 'Chip', component: ChipDemo}
  { path: '/transition-demo', name: 'Transition', component: TransitionDemo},
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

export default router
