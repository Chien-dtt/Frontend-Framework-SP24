window.trangChuController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get("http://localhost:3000/sanPham").then(function (response) {
    $scope.listSanPham = response.data;
  });
};

window.sanPhamController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get("http://localhost:3000/sanPham").then(function (response) {
    $scope.listSanPham = response.data;
  });
};

window.detailController = function ($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $scope.sanPham = {};
  $http.get("http://localhost:3000/sanPham/" + id).then(function (response) {
    $scope.sanPham = response.data;
  });

  //soLuong
  $scope.count = 0;
  $scope.them = function () {
    $scope.count++;
  };
  $scope.giam = function () {
    $scope.count--;
    if ($scope.count < 0) {
      $scope.count = 0;
    }
  };

  //size
  $scope.sizeS = function () {
    $scope.size = "S";
  };
  $scope.sizeM = function () {
    $scope.size = "M";
  };
  $scope.sizeL = function () {
    $scope.size = "L";
  };
  $scope.sizeXL = function () {
    $scope.size = "XL";
  };
};

window.newController = function ($scope, $http) {
  $scope.listNew = [];
  $http.get("http://localhost:3000/sanPham").then(function (response) {
    $scope.listNew = response.data;
    $scope.listNew = $scope.listNew.reverse();
  });
};

window.spBestController = function ($scope, $http) {
  $scope.listBest = [];
  $http.get("http://localhost:3000/sanPham").then(function (response) {
    $scope.listBest = response.data;
  });
};

window.quanLySanPhamController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get("http://localhost:3000/sanPham").then(function (response) {
    $scope.listSanPham = response.data;
  });

  $scope.add = function () {
    $http
      .post("http://localhost:3000/sanPham", {
        id: $scope.id,
        tenSP: $scope.tenSP,
        img: $scope.img,
        loaiSP: $scope.loaiSP,
        gia: $scope.gia,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Thêm thành công!");
        }
      });
  };

  $scope.delete = function (id) {
    $http
      .delete("http://localhost:3000/sanPham/" + id)
      .then(function (response) {
        if (response.status === 200) {
          alert("Xóa thành công!");
        }
      });
  };

  $scope.detail = function (id) {
    $http.get("http://localhost:3000/sanPham/" + id).then(function (response) {
      $scope.tenSP = response.data.tenSP;
      $scope.img = response.data.img;
      $scope.loaiSP = response.data.loaiSP;
      $scope.gia = response.data.gia;
    });
  };
};

window.detailqlsp = function ($scope, $http, $routeParams, $location) {
  var id = $routeParams.id;
  $http.get("http://localhost:3000/sanPham/" + id).then(function (response) {
    $scope.tenSP = response.data.tenSP;
    $scope.img = response.data.img;
    $scope.loaiSP = response.data.loaiSP;
    $scope.gia = response.data.gia;
  });

  $scope.update = function () {
    $http
      .put("http://localhost:3000/sanPham/" + id, {
        tenSP: $scope.tenSP,
        img: $scope.img,
        loaiSP: $scope.loaiSP,
        gia: $scope.gia,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Cập nhật thành công!");
          $location.url("/quanlysanpham");
        }
      });
  };
};
