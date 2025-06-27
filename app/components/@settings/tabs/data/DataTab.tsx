// Update DataTab UI text
export function DataTab() {
  return (
    <div className="space-y-12">
      {/* Chats Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-bolt-elements-textPrimary">Чаты</h2>
        {dbLoading ? (
          <div className="flex items-center justify-center p-4">
            <div className="i-ph-spinner-gap-bold animate-spin w-6 h-6 mr-2" />
            <span>Загрузка базы данных чатов...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <motion.div className="text-accent-500 mr-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <div className="i-ph-download-duotone w-5 h-5" />
                  </motion.div>
                  <CardTitle className="text-lg group-hover:text-bolt-elements-item-contentAccent transition-colors">
                    Экспорт всех чатов
                  </CardTitle>
                </div>
                <CardDescription>Экспорт всех ваших чатов в JSON-файл.</CardDescription>
              </CardHeader>
              <CardFooter>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={async () => {
                      try {
                        if (!db) {
                          toast.error('База данных недоступна');
                          return;
                        }

                        if (availableChats.length === 0) {
                          toast.warning('Нет чатов для экспорта');
                          return;
                        }

                        await handleExportAllChats();
                      } catch (error) {
                        console.error('Ошибка экспорта чатов:', error);
                        toast.error(
                          `Не удалось экспортировать чаты: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`,
                        );
                      }
                    }}
                    disabled={isExporting || availableChats.length === 0}
                    variant="outline"
                    size="sm"
                    className={classNames(
                      'hover:text-bolt-elements-item-contentAccent hover:border-bolt-elements-item-backgroundAccent hover:bg-bolt-elements-item-backgroundAccent transition-colors w-full justify-center',
                      isExporting || availableChats.length === 0 ? 'cursor-not-allowed' : '',
                    )}
                  >
                    {isExporting ? (
                      <>
                        <div className="i-ph-spinner-gap-bold animate-spin w-4 h-4 mr-2" />
                        Экспорт...
                      </>
                    ) : availableChats.length === 0 ? (
                      'Нет чатов для экспорта'
                    ) : (
                      'Экспортировать все'
                    )}
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>

            {/* ... other chat cards with similar translations ... */}

            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <motion.div
                    className="text-red-500 dark:text-red-400 mr-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="i-ph-trash-duotone w-5 h-5" />
                  </motion.div>
                  <CardTitle className="text-lg group-hover:text-bolt-elements-item-contentAccent transition-colors">
                    Удалить все чаты
                  </CardTitle>
                </div>
                <CardDescription>Удалить всю историю чатов.</CardDescription>
              </CardHeader>
              <CardFooter>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setShowDeleteInlineConfirm(true)}
                    disabled={isDeleting || chatItems.length === 0}
                    variant="outline"
                    size="sm"
                    className={classNames(
                      'hover:text-bolt-elements-item-contentAccent hover:border-bolt-elements-item-backgroundAccent hover:bg-bolt-elements-item-backgroundAccent transition-colors w-full justify-center',
                      isDeleting || chatItems.length === 0 ? 'cursor-not-allowed' : '',
                    )}
                  >
                    {isDeleting ? (
                      <>
                        <div className="i-ph-spinner-gap-bold animate-spin w-4 h-4 mr-2" />
                        Удаление...
                      </>
                    ) : (
                      'Удалить все'
                    )}
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>

      {/* Settings Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-bolt-elements-textPrimary">Настройки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <motion.div className="text-accent-500 mr-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="i-ph-download-duotone w-5 h-5" />
                </motion.div>
                <CardTitle className="text-lg group-hover:text-bolt-elements-item-contentAccent transition-colors">
                  Экспорт всех настроек
                </CardTitle>
              </div>
              <CardDescription>Экспорт всех ваших настроек в JSON-файл.</CardDescription>
            </CardHeader>
            <CardFooter>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Button
                  onClick={handleExportSettings}
                  disabled={isExporting}
                  variant="outline"
                  size="sm"
                  className={classNames(
                    'hover:text-bolt-elements-item-contentAccent hover:border-bolt-elements-item-backgroundAccent hover:bg-bolt-elements-item-backgroundAccent transition-colors w-full justify-center',
                    isExporting ? 'cursor-not-allowed' : '',
                  )}
                >
                  {isExporting ? (
                    <>
                      <div className="i-ph-spinner-gap-bold animate-spin w-4 h-4 mr-2" />
                      Экспорт...
                    </>
                  ) : (
                    'Экспортировать все'
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </Card>

          {/* ... other settings cards with similar translations ... */}

          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <motion.div
                  className="text-red-500 dark:text-red-400 mr-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="i-ph-arrow-counter-clockwise-duotone w-5 h-5" />
                </motion.div>
                <CardTitle className="text-lg group-hover:text-bolt-elements-item-contentAccent transition-colors">
                  Сбросить все настройки
                </CardTitle>
              </div>
              <CardDescription>Сбросить все настройки к значениям по умолчанию.</CardDescription>
            </CardHeader>
            <CardFooter>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Button
                  onClick={() => setShowResetInlineConfirm(true)}
                  disabled={isResetting}
                  variant="outline"
                  size="sm"
                  className={classNames(
                    'hover:text-bolt-elements-item-contentAccent hover:border-bolt-elements-item-backgroundAccent hover:bg-bolt-elements-item-backgroundAccent transition-colors w-full justify-center',
                    isResetting ? 'cursor-not-allowed' : '',
                  )}
                >
                  {isResetting ? (
                    <>
                      <div className="i-ph-spinner-gap-bold animate-spin w-4 h-4 mr-2" />
                      Сброс...
                    </>
                  ) : (
                    'Сбросить все'
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* API Keys Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-bolt-elements-textPrimary">API Ключи</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <motion.div className="text-accent-500 mr-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="i-ph-file-text-duotone w-5 h-5" />
                </motion.div>
                <CardTitle className="text-lg group-hover:text-bolt-elements-item-contentAccent transition-colors">
                  Скачать шаблон
                </CardTitle>
              </div>
              <CardDescription>Скачать шаблонный файл для ваших API ключей.</CardDescription>
            </CardHeader>
            <CardFooter>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Button
                  onClick={handleDownloadTemplate}
                  disabled={isDownloadingTemplate}
                  variant="outline"
                  size="sm"
                  className={classNames(
                    'hover:text-bolt-elements-item-contentAccent hover:border-bolt-elements-item-backgroundAccent hover:bg-bolt-elements-item-backgroundAccent transition-colors w-full justify-center',
                    isDownloadingTemplate ? 'cursor-not-allowed' : '',
                  )}
                >
                  {isDownloadingTemplate ? (
                    <>
                      <div className="i-ph-spinner-gap-bold animate-spin w-4 h-4 mr-2" />
                      Загрузка...
                    </>
                  ) : (
                    'Скачать'
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <motion.div className="text-accent-500 mr-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="i-ph-upload-duotone w-5 h-5" />
                </motion.div>
                <CardTitle className="text-lg group-hover:text-bolt-elements-item-contentAccent transition-colors">
                  Импорт API ключей
                </CardTitle>
              </div>
              <CardDescription>Импорт API ключей из JSON-файла.</CardDescription>
            </CardHeader>
            <CardFooter>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Button
                  onClick={() => apiKeyFileInputRef.current?.click()}
                  disabled={isImportingKeys}
                  variant="outline"
                  size="sm"
                  className={classNames(
                    'hover:text-bolt-elements-item-contentAccent hover:border-bolt-elements-item-backgroundAccent hover:bg-bolt-elements-item-backgroundAccent transition-colors w-full justify-center',
                    isImportingKeys ? 'cursor-not-allowed' : '',
                  )}
                >
                  {isImportingKeys ? (
                    <>
                      <div className="i-ph-spinner-gap-bold animate-spin w-4 h-4 mr-2" />
                      Импорт...
                    </>
                  ) : (
                    'Импортировать ключи'
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Data Visualization */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-bolt-elements-textPrimary">Использование данных</h2>
        <Card>
          <CardContent className="p-5">
            <DataVisualization chats={availableChats} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
