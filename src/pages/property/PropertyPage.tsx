import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useProperty } from '../../features/property/hooks/useProperty';
import { useImages } from '../../features/image/hooks/useImages';
import { useRooms } from '../../features/room/hooks/useRooms';
import { PropertyGallery } from '../../features/property/components/PropertyGallery';
import { PropertyInfo } from '../../features/property/components/PropertyInfo';
import { RoomList } from '../../features/room/components/RoomList';
import { Breadcrumb } from '../../features/common/components/navigation/Breadcrumb';

export const PropertyPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  const { data: property, isLoading: isLoadingProperty } = useProperty(id);
  const { data: images, isLoading: isLoadingImages } = useImages({ propertyId: id });
  const { data: rooms, isLoading: isLoadingRooms } = useRooms({ propertyId: id });

  const propertyImages = images?.filter(img => !img.room_id && !img.product_id) || [];

  if (isLoadingProperty || isLoadingImages || isLoadingRooms) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-160px)]">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4">
        <p className="text-gray-500 text-center">
          物件情報の取得中にエラーが発生しました。<br />
          しばらく経ってから再度お試しください。
        </p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb />
      <div className="max-w-7xl mx-auto">
        <PropertyGallery images={propertyImages} propertyName={property.name} />
        <div className="px-4 py-8">
          <PropertyInfo property={property} />
          <div className="mt-8">
            <RoomList 
              propertyId={id} 
              rooms={rooms || []} 
              images={images || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};