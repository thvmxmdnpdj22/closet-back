// models/user.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user', // 테이블 이름과 동일하게 설정
        /* DB 속성 정의 */
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
           
            pw: {
                type: DataTypes.STRING(255),
                allowNull: true, // notNull이 아니라 allowNull을 사용합니다.
                comment: '',
            },
            phoneNumber: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment: '',
            },
            username: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment: '',
            },
            confirmPassword: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment: '',
            },
            nickname: {
                type: DataTypes.STRING(255),
                comment: '',
            },
            birthdate: {
                type: DataTypes.DATE,
                comment: '',
            },
            address: {
                type: DataTypes.STRING(255),
                comment: '',
            },
            securityQuestion: {
                type: DataTypes.STRING(255),
                comment: '',
            }
        },
        /* 부가 설정 */
        {
            tableName: 'user',      // DB에 저장될 테이블 이름
            freezeTableName: false,
            underscored: false,
            timestamps: false,      // createdAt, updatedAt 자동 설정
        }
    );

    /* 관계 설정 */
    User.associate = models => {
        // 관계 설정이 필요한 경우 여기에 추가합니다.
    }

    return User;
}
