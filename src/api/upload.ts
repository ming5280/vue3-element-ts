// import { UploadApiResult } from './model/uploadModel';
import { http } from '/@/utils/http';
// import { UploadFileParams } from 'axios';
// import { useGlobSetting } from '/@/hooks/setting';

enum Api {
  UploadUrl = '/mock/api/login',
}

/**
 * @description: Upload interface
 */
export function uploadApi(params: any) {
  return http.uploadFile<any>(
    {
      url: Api.UploadUrl,
    },
    params,
  );
}

// export function uploadApi(
//   params: UploadFileParams,
//   onUploadProgress: (progressEvent: ProgressEvent) => void,
// ) {
//   return http.uploadFile<UploadApiResult>(
//     {
//       url: uploadUrl,
//       onUploadProgress,
//     },
//     params,
//   );
// }
