import ImageBrokenIcon from '@/icons/image-broken.svg?react';
import { useI18n } from '@/i18n';

export function NotFoundComponent() {
  const i18n = useI18n();

  return (
    <div class="qc-not-found">
      <ImageBrokenIcon width={48} height={48}/>
      <div>{ i18n.t('common.Presentation not found') }</div>
    </div>
  );
}
