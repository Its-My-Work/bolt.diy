import { t } from '~/lib/localization';
import { TAB_LABELS, TAB_DESCRIPTIONS } from './constants';

// Обновляем компонент для использования локализации
const BetaLabel = () => (
  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-purple-500/10 dark:bg-purple-500/20">
    <span className="text-[10px] font-medium text-purple-600 dark:text-purple-400">
      {t('beta.label')}
    </span>
  </div>
);

const AnimatedSwitch = ({ checked, onCheckedChange, id, label }: AnimatedSwitchProps) => {
  return (
    <div className="flex items-center gap-2">
      <Switch checked={checked} onCheckedChange={onCheckedChange} id={id} />
      <label
        htmlFor={id}
        className="text-sm text-gray-500 dark:text-gray-400 select-none cursor-pointer whitespace-nowrap w-[88px]"
      >
        {t(`features.${label.toLowerCase().replace(' ', '')}` as TranslationKey)}
      </label>
    </div>
  );
};

export const ControlPanel = ({ open, onClose }: ControlPanelProps) => {
  // ... остальной код компонента ...

  return (
    <RadixDialog.Root open={open}>
      <RadixDialog.Portal>
        {/* ... существующий код ... */}
          <RadixDialog.Content>
            {/* ... существующий код ... */}
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              {showTabManagement ? t('tabs.tab-management') : activeTab ? t(`tabs.${activeTab}`) : t('common.settings')}
            </DialogTitle>
            {/* ... остальная часть компонента ... */}
          </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
