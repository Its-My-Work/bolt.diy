// Update DebugTab UI text
export default function DebugTab() {
  // Update status messages
  const getOllamaStatus = () => {
    const ollamaProvider = providers?.Ollama;
    const isOllamaEnabled = ollamaProvider?.settings?.enabled;

    if (!isOllamaEnabled) {
      return {
        status: 'Отключено',
        color: 'text-red-500',
        bgColor: 'bg-red-500',
        message: 'Провайдер Ollama отключен в настройках',
      };
    }

    if (!ollamaStatus.isRunning) {
      return {
        status: 'Не запущен',
        color: 'text-red-500',
        bgColor: 'bg-red-500',
        message: ollamaStatus.error || 'Сервис Ollama не запущен',
      };
    }

    const modelCount = ollamaStatus.models?.length ?? 0;

    return {
      status: 'Запущен',
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      message: `Сервис Ollama запущен с ${modelCount} установленными моделями (Провайдер: Включен)`,
    };
  };

  // Update export formats
  const exportFormats: ExportFormat[] = [
    {
      id: 'json',
      label: 'Экспорт в JSON',
      icon: 'i-ph:file-js',
      handler: exportDebugInfo,
    },
    {
      id: 'csv',
      label: 'Экспорт в CSV',
      icon: 'i-ph:file-csv',
      handler: exportAsCSV,
    },
    {
      id: 'pdf',
      label: 'Экспорт в PDF',
      icon: 'i-ph:file-pdf',
      handler: exportAsPDF,
    },
    {
      id: 'txt',
      label: 'Экспорт в текст',
      icon: 'i-ph:file-text',
      handler: exportAsText,
    },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto p-4">
      {/* Quick Stats Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Errors Card */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#1A1A1A] hover:border-purple-500/30 transition-all duration-200 h-[180px] flex flex-col">
          <div className="flex items-center gap-2">
            <div className="i-ph:warning-octagon text-purple-500 w-4 h-4" />
            <div className="text-sm text-bolt-elements-textSecondary">Ошибки</div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className={classNames('text-2xl font-semibold', errorLogs.length > 0 ? 'text-red-500' : 'text-green-500')}>
              {errorLogs.length}
            </span>
          </div>
          <div className="text-xs text-bolt-elements-textSecondary mt-2 flex items-center gap-1.5">
            <div
              className={classNames(
                'w-3.5 h-3.5',
                errorLogs.length > 0 ? 'i-ph:warning text-red-500' : 'i-ph:check-circle text-green-500',
              )}
            />
            {errorLogs.length > 0 ? 'Обнаружены ошибки' : 'Ошибок не обнаружено'}
          </div>
        </div>

        {/* ... other stat cards with similar translations ... */}

        {/* Ollama Service Card */}
        <div className="md:col-span-4 p-6 rounded-xl bg-white dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#1A1A1A] hover:border-purple-500/30 transition-all duration-200 h-[260px] flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="i-ph:robot text-purple-500 w-5 h-5" />
              <div>
                <div className="text-base font-medium text-bolt-elements-textPrimary">Сервис Ollama</div>
                <div className="text-xs text-bolt-elements-textSecondary mt-0.5">{status.message}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-bolt-elements-background-depth-3">
                <div
                  className={classNames('w-2 h-2 rounded-full animate-pulse', status.bgColor, {
                    'shadow-lg shadow-green-500/20': status.status === 'Запущен',
                    'shadow-lg shadow-red-500/20': status.status === 'Не запущен',
                  })}
                />
                <span className={classNames('text-xs font-medium flex items-center gap-1', status.color)}>
                  {status.status}
                </span>
              </div>
              <div className="text-[10px] text-bolt-elements-textTertiary flex items-center gap-1.5">
                <div className="i-ph:clock w-3 h-3" />
                {ollamaStatus.lastChecked.toLocaleTimeString()}
              </div>
            </div>
          </div>

          {/* ... rest of the Ollama card content ... */}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={getSystemInfo}
          disabled={loading.systemInfo}
          className={classNames(
            'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
            'bg-white dark:bg-[#0A0A0A]',
            'border border-[#E5E5E5] dark:border-[#1A1A1A]',
            'hover:bg-purple-50 dark:hover:bg-[#1a1a1a]',
            'hover:border-purple-200 dark:hover:border-purple-900/30',
            'text-bolt-elements-textPrimary',
            { 'opacity-50 cursor-not-allowed': loading.systemInfo },
          )}
        >
          {loading.systemInfo ? (
            <div className="i-ph:spinner-gap w-4 h-4 animate-spin" />
          ) : (
            <div className="i-ph:gear w-4 h-4" />
          )}
          Обновить системную информацию
        </button>

        {/* ... other action buttons with similar translations ... */}

        <ExportButton />
      </div>

      {/* System Information */}
      <Collapsible open={openSections.system} onOpenChange={(open) => setOpenSections((prev) => ({ ...prev, system: open }))}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-6 rounded-xl bg-white dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#1A1A1A]">
            <div className="flex items-center gap-3">
              <div className="i-ph:cpu text-purple-500 w-5 h-5" />
              <h3 className="text-base font-medium text-bolt-elements-textPrimary">Системная информация</h3>
            </div>
            <div className={classNames('i-ph:caret-down w-4 h-4 transform transition-transform duration-200', openSections.system ? 'rotate-180' : '')} />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="p-6 mt-2 rounded-xl bg-white dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#1A1A1A]">
            {systemInfo ? (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-sm flex items-center gap-2">
                    <div className="i-ph:desktop text-bolt-elements-textSecondary w-4 h-4" />
                    <span className="text-bolt-elements-textSecondary">ОС: </span>
                    <span className="text-bolt-elements-textPrimary">{systemInfo.os}</span>
                  </div>
                  {/* ... other system info fields with similar translations ... */}
                </div>
              </div>
            ) : (
              <div className="text-sm text-bolt-elements-textSecondary">Загрузка системной информации...</div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* ... other collapsible sections with similar translations ... */}
    </div>
  );
}
