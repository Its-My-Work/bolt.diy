// Previous imports remain the same

// Update TAB_LABELS and TAB_DESCRIPTIONS with Russian translations
const TAB_LABELS: Record<TabType, string> = {
  profile: 'Профиль',
  settings: 'Настройки',
  notifications: 'Уведомления',
  features: 'Функции',
  data: 'Данные',
  'cloud-providers': 'Облачные провайдеры',
  'local-providers': 'Локальные провайдеры',
  'service-status': 'Статус сервиса',
  connection: 'Подключение',
  debug: 'Отладка',
  'event-logs': 'Журнал событий',
  update: 'Обновления',
  'task-manager': 'Диспетчер задач',
  'tab-management': 'Управление вкладками',
};

const TAB_DESCRIPTIONS: Record<TabType, string> = {
  profile: 'Управление профилем и настройками аккаунта',
  settings: 'Конфигурация параметров приложения',
  notifications: 'Просмотр и управление уведомлениями',
  features: 'Изучение новых и предстоящих функций',
  data: 'Управление данными и хранилищем',
  'cloud-providers': 'Настройка облачных AI-провайдеров и моделей',
  'local-providers': 'Настройка локальных AI-провайдеров и моделей',
  'service-status': 'Мониторинг статуса облачных LLM-сервисов',
  connection: 'Проверка статуса подключения и настроек',
  debug: 'Инструменты отладки и системная информация',
  'event-logs': 'Просмотр системных событий и логов',
  update: 'Проверка обновлений и заметок о выпуске',
  'task-manager': 'Мониторинг системных ресурсов и процессов',
  'tab-management': 'Настройка видимых вкладок и их порядка',
};

// Update BetaLabel component
const BetaLabel = () => (
  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-purple-500/10 dark:bg-purple-500/20">
    <span className="text-[10px] font-medium text-purple-600 dark:text-purple-400">БЕТА</span>
  </div>
);

// Update AnimatedSwitch labels
const AnimatedSwitch = ({ checked, onCheckedChange, id, label }: AnimatedSwitchProps) => {
  const russianLabels: Record<string, string> = {
    'Developer Mode': 'Режим разработчика',
    'User Mode': 'Пользовательский режим'
  };

  return (
    <div className="flex items-center gap-2">
      {/* Switch component remains the same */}
      <label
        htmlFor={id}
        className="text-sm text-gray-500 dark:text-gray-400 select-none cursor-pointer whitespace-nowrap w-[88px]"
      >
        {russianLabels[label] || label}
      </label>
    </div>
  );
};

// Update dialog titles in the ControlPanel component
export const ControlPanel = ({ open, onClose }: ControlPanelProps) => {
  // ... existing code ...

  return (
    <RadixDialog.Root open={open}>
      <RadixDialog.Portal>
        {/* ... existing code ... */}
          <RadixDialog.Content>
            {/* ... existing code ... */}
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              {showTabManagement ? 'Управление вкладками' : activeTab ? TAB_LABELS[activeTab] : 'Панель управления'}
            </DialogTitle>
            {/* ... rest of the component ... */}
          </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
