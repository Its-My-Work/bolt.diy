// Update all UI text in ConnectionsTab
export default function ConnectionsTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="i-ph:plugs-connected w-5 h-5 text-bolt-elements-item-contentAccent dark:text-bolt-elements-item-contentAccent" />
          <h2 className="text-lg font-medium text-bolt-elements-textPrimary dark:text-bolt-elements-textPrimary">
            Настройки подключения
          </h2>
        </div>
        <Button
          onClick={() => setShowDiagnostics(!showDiagnostics)}
          variant="outline"
          className="flex items-center gap-2 hover:bg-bolt-elements-item-backgroundActive/10 hover:text-bolt-elements-textPrimary dark:hover:bg-bolt-elements-item-backgroundActive/10 dark:hover:text-bolt-elements-textPrimary transition-colors"
        >
          {showDiagnostics ? (
            <>
              <div className="i-ph:eye-slash w-4 h-4" />
              Скрыть диагностику
            </>
          ) : (
            <>
              <div className="i-ph:wrench w-4 h-4" />
              Устранение неполадок
            </>
          )}
        </Button>
      </motion.div>
      <p className="text-sm text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary">
        Управление подключениями к внешним сервисам и интеграциями
      </p>

      {/* Environment Variables Info */}
      <motion.div className="bg-bolt-elements-background dark:bg-bolt-elements-background rounded-lg border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor">
        <div className="p-6">
          <button onClick={() => setIsEnvVarsExpanded(!isEnvVarsExpanded)}>
            <div className="flex items-center gap-2">
              <div className="i-ph:info w-5 h-5 text-bolt-elements-item-contentAccent dark:text-bolt-elements-item-contentAccent" />
              <h3 className="text-base font-medium text-bolt-elements-textPrimary dark:text-bolt-elements-textPrimary">
                Переменные окружения
              </h3>
            </div>
          </button>

          {isEnvVarsExpanded && (
            <div className="mt-4">
              <p className="text-sm text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary mb-2">
                Вы можете настроить подключения с помощью переменных окружения в файле{' '}
                <code className="px-1 py-0.5 bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 rounded">
                  .env.local
                </code>
              </p>
              {/* ... rest of the environment variables section ... */}
              <div className="mt-3 text-xs text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary space-y-1">
                <p>
                  <span className="font-medium">Типы токенов:</span>
                </p>
                <ul className="list-disc list-inside pl-2 space-y-1">
                  <li>
                    <span className="font-medium">classic</span> - Персональный токен доступа с областями{' '}
                    <code className="px-1 py-0.5 bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 rounded">
                      repo, read:org, read:user
                    </code>
                  </li>
                  <li>
                    <span className="font-medium">fine-grained</span> - Токен с доступом к репозиториям и организациям
                  </li>
                </ul>
                <p className="mt-2">
                  При установке эти переменные будут использоваться автоматически без необходимости ручного подключения.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Additional help text */}
      <div className="text-sm text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 p-4 rounded-lg">
        <p className="flex items-center gap-1 mb-2">
          <span className="i-ph:lightbulb w-4 h-4 text-bolt-elements-icon-success dark:text-bolt-elements-icon-success" />
          <span className="font-medium">Совет по устранению неполадок:</span>
        </p>
        <p className="mb-2">
          Если у вас возникли проблемы с подключениями, попробуйте использовать инструмент диагностики в верхней части этой страницы.
        </p>
        <p>Для постоянных проблем:</p>
        <ol className="list-decimal list-inside pl-4 mt-1">
          <li>Проверьте консоль браузера на наличие ошибок</li>
          <li>Убедитесь, что ваши токены имеют правильные разрешения</li>
          <li>Попробуйте очистить кеш и куки браузера</li>
          <li>Убедитесь, что ваш браузер разрешает сторонние куки при использовании интеграций</li>
        </ol>
      </div>
    </div>
  );
}
