/**
 * Created by TrungDQ3 on 6/9/14.
 */

var BackendService = Base.extend({
  BACKEND_URL: '',
  getFrameData: function () {
    return {
      templateId: 1,
      masterLayout: 'vp2',
      frames: [
        {
          frameId: 1,
          items: [
            {
              itemId: 1,
              type: 'image',
              url: 'http://abc.com/def1.jpg'
            },
            {
              itemId: 2,
              type: 'image',
              url: 'http://abc.com/def2.jpg'
            },
            {
              itemId: 3,
              type: 'image',
              url: 'http://abc.com/def3.jpg'
            }
          ],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        },
        {
          frameId: 2,
          items: [
            {
              itemId: 4,
              type: 'image',
              url: 'http://abc.com/def4.jpg'
            },
            {
              itemId: 5,
              type: 'image',
              url: 'http://abc.com/def5.jpg'
            },
            {
              itemId: 6,
              type: 'image',
              url: 'http://abc.com/def6.jpg'
            }
          ],
          effects: ['slideLeft', 'slideRight'],
          childTemplateId: 3
        }
      ]
    }
  }
});