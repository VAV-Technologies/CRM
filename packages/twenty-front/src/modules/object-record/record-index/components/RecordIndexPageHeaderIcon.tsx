import { ObjectMetadataIcon } from '@/object-metadata/components/ObjectMetadataIcon';
import { type EnrichedObjectMetadataItem } from '@/object-metadata/types/EnrichedObjectMetadataItem';
import { isDefined } from 'twenty-shared/utils';

export const RecordIndexPageHeaderIcon = ({
  objectMetadataItem,
}: {
  objectMetadataItem?: EnrichedObjectMetadataItem;
}) => {
  if (!isDefined(objectMetadataItem)) {
    return null;
  }

  // 24px padded box (matches the sidebar icon holders) instead of the
  // default 16px tile where the glyph touches the edges.
  return (
    <ObjectMetadataIcon
      objectMetadataItem={objectMetadataItem}
      containerSize={24}
    />
  );
};
