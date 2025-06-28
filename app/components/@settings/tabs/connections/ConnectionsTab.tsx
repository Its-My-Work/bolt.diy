import { t } from '~/lib/localization';

export default function ConnectionsTab() {
  return (
    <div className="space-y-6">
      <motion.div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="i-ph:plugs-connected w-5 h-5 text-bolt-elements-item-contentAccent dark:text-bolt-elements-item-contentAccent" />
          <h2 className="text-lg font-medium text-bolt-elements-textPrimary dark:text-bolt-elements-textPrimary">
            {t('connection.title')}
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
              {t('connection.hideDiagnostics')}
            </>
          ) : (
            <>
              <div className="i-ph:wrench w-4 h-4" />
              {t('connection.diagnostics')}
            </>
          )}
        </Button>
      </motion.div>
      <p className="text-sm text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary">
        {t('connection.description')}
      </p>

      {/* Остальная часть компонента с использованием t() для всех текстовых элементов */}
    </div>
  );
}
