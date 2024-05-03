// models/product.js

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'product', // 테이블 이름과 동일하게 설정
        /* DB 속성 정의 */
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment: '',
            },
            description: {
                type: DataTypes.TEXT,
                comment: '',
            },
            category: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: '',
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: '',
            },
            // 다른 속성들 추가
        },
        /* 부가 설정 */
        {
            tableName: 'product',      // DB에 저장될 테이블 이름
            freezeTableName: false,
            underscored: false,
            timestamps: false,      // createdAt, updatedAt 자동 설정
        }
    );

    /* 관계 설정 */
    Product.associate = models => {
        // 관계 설정이 필요한 경우 여기에 추가합니다.
    }

    return Product;
}
