"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const dtos_1 = require("./dtos");
const swagger_1 = require("@nestjs/swagger");
const _decorators_1 = require("../../decorators");
const user_1 = require("../user");
let CategoryController = class CategoryController {
    constructor(service) {
        this.service = service;
    }
    async getCategories() {
        return await this.service.getAllCategories();
    }
    async createCategory(createCategoryPayload) {
        return await this.service.createCategory(createCategoryPayload);
    }
    async updateCategory(updateCategoryPayload, categoryId) {
        await this.service.updateCategory({
            ...updateCategoryPayload,
            id: categoryId,
        });
    }
    async deleteCategory(categoryId) {
        await this.service.deleteCategory(categoryId);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, _decorators_1.Protected)(false),
    (0, _decorators_1.Roles)([user_1.UserRoles.user, user_1.UserRoles.admin]),
    (0, swagger_1.ApiOperation)({
        description: 'Barcha categoriesni olish',
        summary: 'Barcha categoriyalarni olish',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, _decorators_1.Protected)(true),
    (0, _decorators_1.Roles)([user_1.UserRoles.admin]),
    (0, swagger_1.ApiOperation)({ summary: 'Yangi category yaratish' }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, _decorators_1.Protected)(true),
    (0, _decorators_1.Roles)([user_1.UserRoles.admin]),
    (0, swagger_1.ApiOperation)({ summary: 'Categoryni update qilish' }),
    (0, common_1.Put)('/edit/:categoryId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('categoryId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateCategoryDto, Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, _decorators_1.Protected)(true),
    (0, _decorators_1.Roles)([user_1.UserRoles.admin]),
    (0, swagger_1.ApiOperation)({ summary: "Categoryni o'chirish" }),
    (0, common_1.Delete)('/delete/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Category'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map