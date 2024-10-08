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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const review_service_1 = require("./review.service");
const dtos_1 = require("./dtos");
const swagger_1 = require("@nestjs/swagger");
const _decorators_1 = require("../../decorators");
const user_1 = require("../user");
let ReviewController = class ReviewController {
    constructor(service) {
        this.service = service;
    }
    async getReviews() {
        return await this.service.getAllReviews();
    }
    async createReview(createReviewPayload) {
        return await this.service.createReview(createReviewPayload);
    }
    async updateReview(updateReviewPayload, reviewid) {
        await this.service.updateReview({
            ...updateReviewPayload,
            id: reviewid,
        });
    }
    async deleteReview(reviewId) {
        await this.service.deleteReview(reviewId);
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, _decorators_1.Protected)(false),
    (0, _decorators_1.Roles)([user_1.UserRoles.admin, user_1.UserRoles.user]),
    (0, swagger_1.ApiOperation)({
        description: 'Barcha reviewlarni olish',
        summary: 'Barcha reviewlarni olish',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviews", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, _decorators_1.Protected)(true),
    (0, _decorators_1.Roles)([user_1.UserRoles.admin, user_1.UserRoles.user]),
    (0, swagger_1.ApiOperation)({ summary: 'Yangi review yaratish' }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, _decorators_1.Protected)(true),
    (0, _decorators_1.Roles)([user_1.UserRoles.admin]),
    (0, swagger_1.ApiOperation)({ summary: 'Reviewlarni yangilash' }),
    (0, common_1.Put)('/edit/:reviewid'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('reviewid', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateReviewDto, Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateReview", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, _decorators_1.Protected)(true),
    (0, _decorators_1.Roles)([user_1.UserRoles.admin]),
    (0, swagger_1.ApiOperation)({ summary: "Reviewni o'chirish" }),
    (0, common_1.Delete)('/delete/:reviewId'),
    __param(0, (0, common_1.Param)('reviewId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "deleteReview", null);
exports.ReviewController = ReviewController = __decorate([
    (0, swagger_1.ApiTags)('Reviews'),
    (0, common_1.Controller)('reviews'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map